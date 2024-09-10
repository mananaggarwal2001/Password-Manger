package com.backendVersion.passOP.service;

import com.backendVersion.passOP.model.Password;
import com.backendVersion.passOP.repository.PasswordRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PasswordServiceImpl implements PasswordService {
    private final PasswordRepository passwordRepository;

    public PasswordServiceImpl(PasswordRepository passwordRepository) {
        this.passwordRepository = passwordRepository;
    }

    @Override
    public Password setPassword(Password password) {
        return passwordRepository.save(password);
    }

    @Override
    public List<Password> getAllPasswords() {
        return passwordRepository.findAll();
    }

    @Override
    public void deletePassword(int id) {
        passwordRepository.deleteById(id);
    }

    @Override
    public Password updatePassword(Password password) {
        return null;
    }
}
