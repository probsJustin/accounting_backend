import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { drive_v3, google } from 'googleapis';
import { readFileSync } from 'fs';

@Injectable()
export class BackupService {
  private readonly logger = new Logger(BackupService.name);

  @Cron(CronExpression.EVERY_5_SECONDS)
  handleCron() {
    this.logger.debug('Called every 5 seconds');
    // Place your task logic here
  }


  @Cron(CronExpression.EVERY_DAY_AT_1AM)
  async handleBackupCron() {
    this.logger.debug('Started backup process');
    
    // Run mysqldump to backup your database
    const execSync = require('child_process').execSync;
    execSync('mysqldump -u username -p password database_name > /path/to/backup.sql');
    
    // Upload to Google Drive
    await this.uploadToDrive('/path/to/backup.sql');
    
    this.logger.debug('Finished backup process');
  }

  async uploadToDrive(filePath: string) {
    const TOKEN_PATH = 'token.json'; // You'll get this after the first authorization
    const CREDENTIALS_PATH = 'credentials.json';
  
    const { client_secret, client_id, redirect_uris } = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8')).installed;
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
  
    const token = readFileSync(TOKEN_PATH, 'utf-8');
    oAuth2Client.setCredentials(JSON.parse(token));
  
    const drive = google.drive({ version: 'v3', auth: oAuth2Client });
    const response = await drive.files.create({
      requestBody: {
        name: 'backup.sql',
        mimeType: 'application/sql',
      },
      media: {
        mimeType: 'application/sql',
        body: readFileSync(filePath),
      },
    });
  
    return response.data;
  }
}