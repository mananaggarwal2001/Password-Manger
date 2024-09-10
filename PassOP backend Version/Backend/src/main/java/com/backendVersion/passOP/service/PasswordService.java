package com.backendVersion.passOP.service;

import com.backendVersion.passOP.model.Password;

import java.util.List;

public interface PasswordService {
    Password setPassword(Password password);

    List<Password> getAllPasswords();

    // for deleting the password with the id
    void deletePassword(int id);
    Password updatePassword(Password password);
}
