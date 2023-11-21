# set dotenv-load
now := `date +"%s"`

# Showing this message
default:
    @just --choose

# Run the development server
serve:
    php artisan serve

# Format the whole project
fmt:
    dprint fmt
    npm run format

# Lint the frontend part of the project
flint:
    npm run lint

# Test the frontend part of the project
ftest:
    npm run test
    npm run test:unit

# Run all available recipes before opening a pull request
pr: flint ftest fmt
