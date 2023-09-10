import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors } from '@nestjs/common';
import { TransactionService } from './transactions.service';
import { ConstantsService } from '../util/constants/constants.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LogParamsInterceptor } from '../util/logParams/logParams.ineceptor';
import { CreateTransactionDto, UpdateTransactionDto } from './types/transactions.dto';

@ApiTags('Transactions')
@Controller(`${ConstantsService.TRANSACTION_URI}`)
export class TransactionController {
  constructor(
    private readonly transactionService: TransactionService,
    ) {}

  @Get(`/:transactionId`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Get Transaction Information' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  getTransaction(@Param('transactionId') transactionId: string) {
    return this.transactionService.getTransaction(transactionId);
  }

  @Post()
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Create Transaction Information' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  createTransaction(
    @Body() createTransactionDto: CreateTransactionDto
    ) {
    return this.transactionService.createTransaction(createTransactionDto);
  }

  @Put(`/:transactionId`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Update Transaction Information' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  updateTransaction(
    @Param('transactionId') transactionId: string,
    @Body() updateTransactionDto: UpdateTransactionDto
    ) {
    return this.transactionService.updateTransaction(transactionId, updateTransactionDto);
  }

  @Delete(`/:transactionId`)
  @UseInterceptors(LogParamsInterceptor)
  @ApiOperation({ summary: 'Delete Transaction Information' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 500, description: 'Internal Server Error.' })
  @ApiResponse({ status: 404, description: 'Not Found.' })
  deleteTransaction(@Param('transactionId') transactionId: string) {
    return this.transactionService.deleteTransaction(transactionId);
  }
}
