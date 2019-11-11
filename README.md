# [Form Builder (Laravel & React)](https://github.com/devsrv/laravel-form-builder)

#### Setup Guide:
- `git clone https://github.com/devsrv/laravel-form-builder.git`
- `cd laravel-form-builder`
- `composer install --no-dev`
- create database & enter its details in the `.env` file ( _line 9 to 14_ ) located in the root
```php DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=formbuilder
DB_USERNAME=root
DB_PASSWORD=
```
- `php artisan migrate --seed`
- `php artisan serve`
- visit `http://127.0.0.1:8000/`


![App screen 1](https://i.imgur.com/eyc8qbv.png)
![App screen 2](https://i.imgur.com/M7KcFJZ.png)
![App screen 1](https://i.imgur.com/nvHo57o.png)
