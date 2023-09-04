// proxy.service.ts
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConstantsService } from '../constants/constants.service';
import { inspect } from 'util';

@Injectable()
export class ProxyService {
  constructor(
    private httpService: HttpService,
    private constants: ConstantsService
    ) {}

  async forwardRequest(debug: string, method: string, endpoint: string, body?: any, headers?: any, params?: any) {
    // Send request to the original endpoint
    const response = await this.httpService.request({
      method,
      url: endpoint,
      data: body,
      headers: headers,
      params: params,
    }).toPromise().catch(err => {
        console.error("Failed to send request to debug endpoint:", err);
        throw err;
      });

    if(debug === "webhook"){
        // Duplicate the request to the debug endpoint
        // Note: For simplicity, we're not awaiting or catching any errors from the debug request.
        const debugResponse = await this.httpService.request({
        method,
        url: this.constants.WEBHOOK_URL,
        data: body,
        headers: headers,
        params: params,
        }).toPromise().catch(err => {
        console.log("Failed to send request to debug endpoint:", err);
        console.log(`DEBUG_RESPONSE: ${inspect(debugResponse)}`);
        });
    }
    if(debug === "log"){
        console.log(`DEBUG: ${inspect(response)}`);
    }

    return response.data;
  }
}
