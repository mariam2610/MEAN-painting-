import { User } from './user.model';
import { Component, EventEmitter } from '@angular/core';

export class UserServices {
    user: User;

    getuser() {
        return this.user;
    }
}