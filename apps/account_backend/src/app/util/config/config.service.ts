import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
    private readonly configMapping: { [key: string]: string } = {
        dbHost: 'DB_HOST',
        dbPort: 'DB_PORT',
        dbUsername: 'DB_USERNAME',
        dbPassword: 'DB_PASSWORD',
        dbName: 'DB_NAME',
        paypalClientId: 'PAYPAL_CLIENT_ID',
        paypalClientSecret: 'PAYPAL_CLIENT_SECRET',
        stripeSecretKey: 'STRIPE_SECRET_KEY',
        jwtSecret: 'JWT_SECRET',
        googleDriveTokenPath: 'GOOGLE_DRIVE_TOKEN_PATH',
        googleDriveCredentialsPath: 'GOOGLE_DRIVE_CREDENTIALS_PATH',
    };

    constructor(private configService: ConfigService) {}

    get(key: string): string | number | undefined {
        const envVarName = this.configMapping[key];
        if (!envVarName) return undefined;

        return this.configService.get<string | number>(envVarName);
    }
}
