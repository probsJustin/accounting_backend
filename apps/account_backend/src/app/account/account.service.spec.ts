import { Test, TestingModule } from '@nestjs/testing';
import { AccountService } from './account.service';
import { Account } from './types/account.model';
import { CreateAccountDto, UpdateAccountDto } from './types/account.dto';
import { NotFoundException } from '@nestjs/common';
import { getModelToken } from '@nestjs/sequelize';

describe('AccountService', () => {
  let accountService: AccountService;
  let mockAccountModel: Partial<Record<keyof typeof Account, jest.Mock>>;

  beforeEach(async () => {
    mockAccountModel = {
      findOne: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      destroy: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AccountService,
        {
          provide: 'AccountModel',
          useValue: mockAccountModel,
        },
        {
            provide: getModelToken(Account),
            useValue: mockAccountModel,
        }
      ],
    }).compile();

    accountService = module.get<AccountService>(AccountService);
  });

  describe('getAccount', () => {
    it('should return an account if it exists', async () => {
      const mockAccount = { accountUuid: '123', name: 'Test Account' };
      mockAccountModel.findOne.mockResolvedValue(mockAccount);

      expect(await accountService.getAccount('123')).toEqual(mockAccount);
      expect(mockAccountModel.findOne).toHaveBeenCalledWith({ where: { accountUuid: '123' } });
    });

    it('should throw an error if account does not exist', async () => {
      mockAccountModel.findOne.mockResolvedValue(null);

      await expect(accountService.getAccount('123')).rejects.toThrow(NotFoundException);
    });
  });

  describe('createAccount', () => {
    it('should successfully create an account', async () => {
      const mockCreateAccountDto: CreateAccountDto = {
          accountName: 'Test Account',
          emergencyContact: '',
          balance: 0,
          billingInfoId: '',
          initEmail: '',
          description: ''
      };
      const mockAccount = { accountUuid: '123', ...mockCreateAccountDto };
      mockAccountModel.create.mockResolvedValue(mockAccount);

      expect(await accountService.createAccount(mockCreateAccountDto)).toEqual(mockAccount);
      expect(mockAccountModel.create).toHaveBeenCalledWith(mockCreateAccountDto);
    });
  });

  describe('deleteAccount', () => {
    it('should delete the account and return the affected row count', async () => {
      mockAccountModel.destroy.mockResolvedValue(1);

      expect(await accountService.deleteAccount('123')).toEqual(1);
      expect(mockAccountModel.destroy).toHaveBeenCalledWith({ where: { accountUuid: '123' } });
    });
  });

  describe('updateAccount', () => {
    const mockUpdateAccountDto: UpdateAccountDto = {
        emergencyContact: 'Emergency Contact Info',
        balance: 100,
        accountName: 'Updated Account Name',
        billingInfoId: 'billing-001',
        initEmail: 'updatedemail@test.com',
        description: 'Updated Account Description'
    };
    const updatedMockAccount = { accountUuid: '123', ...mockUpdateAccountDto };

    it('should update and return the updated account', async () => {
      mockAccountModel.update.mockResolvedValue([1]);

      // This mock ensures that after an update, if findOne is called it returns the updated account.
      mockAccountModel.findOne.mockImplementation((query) => {
        if (query.where.accountUuid === '123') {
          return updatedMockAccount;
        }
        return null;
      });

      expect(await accountService.updateAccount('123', mockUpdateAccountDto)).toEqual(updatedMockAccount);
      expect(mockAccountModel.update).toHaveBeenCalledWith(mockUpdateAccountDto, { where: { accountUuid: '123' } });
      expect(mockAccountModel.findOne).toHaveBeenCalledWith({ where: { accountUuid: '123' } });
    });

    it('should throw an error if no account was updated', async () => {
      mockAccountModel.update.mockResolvedValue([0]);

      await expect(accountService.updateAccount('123', mockUpdateAccountDto)).rejects.toThrow(Error);
    });
    });
});
