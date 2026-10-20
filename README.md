# AURA UI — Physical + Living Interface Design System

> **AURA** — это не просто тема или набор стилей. Это визуальная, материальная и физическая дизайн-система для современных веб-приложений (React, TypeScript, Tailwind CSS, Radix UI).
> 
> Главный принцип: **интерфейс как физический цифровой объект**, обладающий массой, глубиной, оптической плотностью и живым световым откликом.

---

## 💎 Философия AURA

В AURA любой элемент интерфейса воспринимается не как плоский прямоугольник с тенями, а как физическое тело:
1. **Material (Материал)**:
   - **Obsidian Glass** (Тёмная тема) — глубокое полированное обсидиановое стекло с фиолетово-маджентовой аурой.
   - **Milk Glass / Porcelain Pearl** (Светлая тема) — благородный молочный опал, тёплый фарфор и перламутровые кабошоны со спекулярными бликами и контрастной каменной типографикой.
   - **Titanium Metal** — матовый титан с микрофасками и строгой геометрией.
   - **Liquid Mercury** — живой жидкий металл (сигнатурный слой).
2. **Depth & Elevation (Глубина)**: 7 уровней физической высоты (от E0 World до E6 Cinematic).
3. **Light with Meaning (Свет со смыслом)**: Никакого бессмысленного «цыганского» свечения. Аура появляется только для обозначения состояния, фокуса, энергии или семантики (`primary`, `energy`, `success`, `warning`, `error`).
4. **Living Physics (Физика отклика)**: Сжатие при нажатии (`compression`), восстановление формы (`settling`), инерция и подповерхностное рассеивание.

---

## 📦 Структура репозитория

```
DS AURA/
├── src/
│   ├── components/
│   │   ├── aura/              # Физические поверхности AURA (AURASurface)
│   │   ├── signature/         # Сигнатурные компоненты (Liquid Mercury Processing)
│   │   └── ui/                # Базовые компоненты (Button со всеми физическими состояниями)
│   ├── foundation/            # Провайдеры контекста (AuraProvider, ThemeProvider, PerformanceProvider)
│   ├── lib/                   # Утилиты физики, высот (elevation) и движения (motion)
│   ├── styles/                # Глобальные стили (globals.css, Orbitron/Inter шрифты)
│   ├── tokens/                # Токены: цвета, высоты, материалы, физика движения, отступы
│   └── index.ts               # Главная точка экспорта дизайн-системы
├── docs/                      # Архитектурная документация и гайды по компонентам
│   ├── components/button.md   # Физика и спецификация кнопки AURA
│   ├── elevation.md           # Система 7 уровней глубины E0-E6
│   └── typography.md          # Шрифтовая система
├── examples/                  # Демонстрационные витрины (Showcase)
├── tests/                     # Модульные (Vitest) и визуальные регрессионные тесты (Playwright)
├── AGENTS.md                  # Свод правил разработки AURA Codex
└── package.json
```

---

## 🚀 Быстрый старт

### 1. Установка зависимостей

```bash
npm install
```

### 2. Запуск Showcase витрины компонентов

```bash
npm run dev
```
Интерфейс откроется по адресу `http://127.0.0.1:5173`.

### 3. Сборка и тестирование

```bash
# Проверка типов и сборка
npm run build

# Модульные тесты (Vitest)
npm test

# Визуальное тестирование состояний (Playwright)
npm run test:visual
```

---

## 🔌 Как использовать AURA в других проектах

### Шаг 1: Подключение стилей и токенов

Импортируйте токенную систему в ваш главный CSS-файл:

```css
@import "aura-ui/tokens/index.css";
@import "aura-ui/styles/globals.css";
```

### Шаг 2: Настройка Tailwind CSS

Расширьте конфигурацию `tailwind.config.ts`, добавив поддержку цветов и радиусов AURA (см. `tailwind.config.ts` в корне репозитория).

### Шаг 3: Оборачивание приложения в провайдеры

```tsx
import React from "react";
import { AuraProvider, ThemeProvider, AURASurface, Button } from "aura-ui";

export function App() {
  return (
    <AuraProvider tier="cinematic">
      <ThemeProvider defaultTheme="dark">
        <AURASurface elevation="E2" className="p-8 rounded-2xl">
          <h1 className="text-2xl font-bold mb-4">AURA Interface</h1>
          <Button variant="default" aura="primary">
            Физическая кнопка
          </Button>
        </AURASurface>
      </ThemeProvider>
    </AuraProvider>
  );
}
```

---

## 🎨 Система токенов

Иерархия токенов исключает случайные хардкодные значения:

$$\text{Primitive Token} \longrightarrow \text{Semantic Token} \longrightarrow \text{Component Token} \longrightarrow \text{Component}$$

* `colors.css` — палитры Obsidian, Milk Glass, Neon Energy, семантические акценты.
* `elevation.css` — физические тени, фаски, рассеянный свет и границы.
* `materials.css` — оптические свойства стекла, отражений, перламутра и размытия.
* `motion.css` — физические кривые сжатия, инерции и восстановления.

---

## 🛡 Лицензия

MIT © Konstantin (ideaia755-maker)
