
# Automated end-to-end (E2E) testing framework using [Playwright](https://playwright.dev/) for reliable and fast browser testing.


## 🛠️ Tech Stack

- [Playwright](https://playwright.dev/)
- TypeScript / JavaScript
- Jest / Playwright Test Runner
- Allure / HTML Reports
- ESLint / Prettier for linting and formatting

---

## 📁 Project Structure

```
playwright-project/
│
├── tests/                   # Test specs
│   ├── login.spec.ts
│   └── ...
│
├── pages/                   # Page objects
│   ├── LoginPage.ts
│   └── ...
│
├── utils/                   # Utility functions
│   └── helpers.ts
│
├── fixtures/                # Test data and setup
│
├── playwright.config.ts     # Global test config
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/playwright-framework.git
cd playwright-framework

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

---

## ✅ Running Tests

```bash
# Run all tests
npx playwright test

# Run a specific test file
npx playwright test tests/login.spec.ts

# Show UI for debugging
npx playwright test --headed

# Generate HTML report
npx playwright show-report
```

---

## 🧪 Writing Tests

Example test:

```ts
import { test, expect } from '@playwright/test';

test('Login should work', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.fill('#username', 'user');
  await page.fill('#password', 'pass');
  await page.click('text=Login');
  await expect(page).toHaveURL('https://example.com/dashboard');
});
```

---

## 📸 Visual Testing

```bash
npx playwright test --update-snapshots
```

Use `toMatchSnapshot()` in tests for visual regression.

---

## 📊 Reports

- Playwright HTML Report: `npx playwright show-report`
- [Optional] Allure Report: Setup via `allure-playwright`

---

## 🔄 CI/CD Integration

Add the following to your GitHub Actions workflow:

```yaml
- name: Install dependencies
  run: npm ci

- name: Install Playwright
  run: npx playwright install --with-deps

- name: Run tests
  run: npx playwright test

- name: Upload Report
  uses: actions/upload-artifact@v2
  with:
    name: playwright-report
    path: playwright-report/
```

---

## 👥 Contributing

1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Push and create a Pull Request

---

## 📄 License

MIT License

---
