set dotenv-load
now := `date +"%s"`

# Showing this message
default:
    @just --choose

# Run the development server
serve:
    php artisan serve

# Format the whole project
fmt:
    npm run format
    dprint fmt

# Lint the frontend part of the project
flint:
    npm run lint

# Test the backend part of the project
btest:
    ./vendor/bin/pest --coverage-text --profile --stop-on-failure --parallel

# Test the frontend part of the project
ftest:
    npm run test
    npm run test:unit

# Run all available recipes before opening a pull request
pr: flint ftest
