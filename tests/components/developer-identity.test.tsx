import { describe, it, expect, vi, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DeveloperIdentity, DeveloperAbout, DeveloperFooter } from "@/branding/developer-identity";

beforeAll(() => {
  HTMLDialogElement.prototype.showModal = function () { this.setAttribute("open", ""); };
  HTMLDialogElement.prototype.close = function () { this.removeAttribute("open"); };
});

describe("Approved ShenData identity", () => {
  it("opens developer details from the keyboard and closes without product license leakage", async () => {
    render(<DeveloperIdentity productName="Парсер документации Торгов" version="0.2.0" releaseYear={2026} />);
    await userEvent.tab();
    expect(screen.getByRole("button", { name: "О программе и разработчике" })).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    expect(screen.getByRole("dialog")).toBeVisible();
    expect(screen.getByText("Парсер документации Торгов")).toBeInTheDocument();
    expect(screen.getByText("0.2.0")).toBeInTheDocument();
    expect(screen.queryByText(/Enterprise|Мраморикс|Администратор|рабочих мест/)).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "Закрыть" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
  it("shows license only when explicitly supplied for the current product", () => {
    render(<DeveloperAbout productName="Test" version="1" open onOpenChange={vi.fn()} licenseText="Условия текущего продукта" />);
    expect(screen.getByText("Условия текущего продукта")).toBeInTheDocument();
  });
  it("uses confirmed developer and studio names in the footer", () => {
    render(<DeveloperFooter releaseYear={2026} />);
    expect(screen.getByText("© 2026 AI STUDIO ShenData")).toBeInTheDocument();
    expect(screen.getByText("Разработчик: Константин Шендрик")).toBeInTheDocument();
  });
});
