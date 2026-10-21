import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@/components/ui/button";
import "@/styles/globals.css";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Continue</Button>);
    expect(screen.getByRole("button", { name: "Continue" })).toBeInTheDocument();
  });

  it("supports variants and sizes", () => {
    render(<Button variant="secondary" size="sm">Small</Button>);
    expect(screen.getByRole("button", { name: "Small" })).toHaveClass("aura-button--secondary", "aura-button--sm");
  });

  it("supports flagship gradient and pill variants", () => {
    render(<Button variant="gradient">Try Free</Button>);
    expect(screen.getByRole("button", { name: "Try Free" })).toHaveClass("aura-button--gradient");
  });

  it("supports disabled", async () => {
    const onClick = vi.fn();
    render(<Button disabled onClick={onClick}>Disabled</Button>);
    await userEvent.click(screen.getByRole("button", { name: "Disabled" }));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("supports loading and blocks click", async () => {
    const onClick = vi.fn();
    render(<Button loading onClick={onClick}>Loading</Button>);
    const button = screen.getByRole("button", { name: "Loading" });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
    await userEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("supports processing and blocks click", async () => {
    const onClick = vi.fn();
    render(<Button processing onClick={onClick}>Processing</Button>);
    const button = screen.getByRole("button", { name: "Processing" });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
    await userEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("supports success", () => {
    render(<Button success>Saved</Button>);
    expect(screen.getByRole("button", { name: "Saved" })).toHaveAttribute("data-success", "true");
  });

  it("supports error", () => {
    render(<Button error>Retry</Button>);
    expect(screen.getByRole("button", { name: "Retry" })).toHaveAttribute("data-error", "true");
  });

  it("supports keyboard focus", async () => {
    render(<Button>Focusable</Button>);
    await userEvent.tab();
    expect(screen.getByRole("button", { name: "Focusable" })).toHaveFocus();
  });
});
