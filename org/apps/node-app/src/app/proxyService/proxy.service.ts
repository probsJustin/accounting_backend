// proxy.service.ts
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProxyService {
  constructor(private httpService: HttpService) {}

  async forwardRequest(method: string, endpoint: string, debugEndpoint: string, body?: any, headers?: any, params?: any) {
    // Send request to the original endpoint
    const response = await this.httpService.request({
      method,
      url: endpoint,
      data: body,
      headers: headers,
      params: params,
    }).toPromise();

    // Duplicate the request to the debug endpoint
    // Note: For simplicity, we're not awaiting or catching any errors from the debug request.
    this.httpService.request({
      method,
      url: debugEndpoint,
      data: body,
      headers: headers,
      params: params,
    }).toPromise().catch(err => {
      console.error("Failed to send request to debug endpoint:", err);
    });

    return response.data;
  }
}
