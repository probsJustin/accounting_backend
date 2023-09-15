import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
    private readonly configMapping: { [key: string]: string } = {
        DB_HOST: 'DB_HOST',
        DB_PORT: 'DB_PORT',
        DB_USERNAME: 'DB_USERNAME',
        DB_PASSWORD: 'DB_PASSWORD',
        DB_NAME: 'DB_NAME',
        PAYPAL_CLIENT_ID: 'PAYPAL_CLIENT_ID',
        PAYPAL_CLIENT_SECRET: 'PAYPAL_CLIENT_SECRET',
        STRIPE_SECRET_KEY: 'STRIPE_SECRET_KEY',
        JWT_SECRET: 'JWT_SECRET',
        GOOGLE_DRIVE_TOKEN_PATH: 'GOOGLE_DRIVE_TOKEN_PATH',
        GOOGLE_DRIVE_CREDENTIALS_PATH: 'GOOGLE_DRIVE_CREDENTIALS_PATH',
    };

    constructor(private configService: ConfigService) {}

    get(key: string): string | undefined {
        const envVarName = this.configMapping[key];
        if (!envVarName) return undefined;
        return process.env[envVarName] ?? undefined;
    }
}
