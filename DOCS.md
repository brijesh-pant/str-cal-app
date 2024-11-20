# String Calculator App Documentation

## Overview

A string calculator application that sums string inputs.

### Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm start
```

4. Run tests

```bash
npm test
```

5. Building for Production

```bash
npm run build
```

### Features

- String-based calculator interface
- Error handling for invalid inputs

## Testing

### Unit Tests

- Comprehensive test suite built with Jest and React Testing Library
- Tests cover component functionality and user interactions
- Run tests locally with `npm test`

### Coverage Reports

- Detailed coverage reports generated in `/coverage` directory
- Track code coverage metrics and identify untested areas
- View HTML coverage reports in `coverage/lcov-report/index.html`

### CI Pipeline

- Automated test runs on every push via GitHub Actions
- Fail-fast approach catches issues early
- Test results visible in GitHub Actions dashboard

## Deployment

### GitHub Actions

- Automated builds and deployments
- Multi-stage pipeline for testing, building and deploying

### Status Tracking

- Real-time build status with CI/CD badges
- Monitor deployments via GitHub Actions dashboard

### Code Coverage

- Coverage tracking via Codecov integration
- Detailed reports and trends over time

## Quality Metrics

[![CI/CD](https://github.com/brijesh-pant/str-cal-app/actions/workflows/node.js.yml/badge.svg)](https://github.com/brijesh-pant/str-cal-app/actions/workflows/node.js.yml)
[![codecov](https://codecov.io/gh/brijesh-pant/str-cal-app/graph/badge.svg?token=RALPXPSDY6)](https://codecov.io/gh/brijesh-pant/str-cal-app)

## Contributing

1. Fork the Repository

   - Create your own copy of the project
   - Keep your fork in sync with upstream

2. Feature Branch

   - Create a new branch for your feature
   - Use clear, descriptive branch names

3. Pull Request

   - Submit PR with detailed description
   - Include screenshots for UI changes

4. Quality Standards
   - Maintain high test coverage
   - Pass all existing tests
