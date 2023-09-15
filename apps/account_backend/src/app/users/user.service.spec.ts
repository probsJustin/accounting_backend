import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { NotFoundException } from '@nestjs/common';
import { User } from './types/user.model';
import { AuthService } from '../auth/auth.service';
import { CreateUserDto, UpdateUserDto } from './types/user.dto';
import { CreateUserDtoExample, UpdateUserDtoExample} from './util/user.examples';

describe('UserService', () => {
    let service: UserService;
    let mockAccountModel: any;

    const mockUser = {
      id: 1,
      username: 'testuser',
      firstname: 'Test',
      lastname: 'User',
      userUuid: 'some-uuid',
      email: 'testuser@example.com',
      password: 'hashedPassword',
      description: 'Test User Description',
      accounts: [],
      $set: jest.fn(), // mock this if you use it in tests
      // ... any other fields/methods from the User model
    };

    const mockUserRepository = {
      findOne: jest.fn(),
      save: jest.fn(),
      // ...any other methods you need to mock
    };

    const mockAccountRepository = {
      findOne: jest.fn(),
      save: jest.fn(),
      // ...any other methods you need to mock for this repository
    };
    const mockUserService = {
      usersModel: jest.fn(),
      accountModel: jest.fn(),
      authService: jest.fn(),
      findOneByUsername: jest.fn(),
      // ... Add other methods and properties from UserService here ...
    };

    
    const mockUsersModel = {
      findOne: jest.fn(),
      findAll: jest.fn(),
      update: jest.fn(),
      create: jest.fn(),
      destroy: jest.fn(),
      // ... any other methods you might use ...
    };

    mockAccountModel = {
        findAll: jest.fn(),
    };

    const mockAuthService = {
      hashPassword: jest.fn().mockReturnValue('hashedPassword'),
      userService: mockUserService,
      jwtService: jest.fn(),
      validateUser: jest.fn(),
      login: jest.fn(),
      // ... Other properties/methods of AuthService ...
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                {
                  provide: 'AccountRepository',
                  useValue: mockAccountRepository,
                },
                {
                    provide: 'User',
                    useValue: mockUsersModel,
                },
                {
                  provide: 'UserRepository', // Ensure the token matches what's used in the actual module
                  useValue: mockUserRepository,
                },
                {
                    provide: 'Account',
                    useValue: mockAccountModel,
                },
                {
                    provide: AuthService,
                    useValue: mockAuthService,
                },
            ],
        }).compile();

        service = module.get<UserService>(UserService);
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('findOneByUsername', () => {
        it('should return a user if found', async () => {
            mockUsersModel.findOne.mockResolvedValue(mockUser);
            expect(await service.findOneByUsername('mockUsername')).toEqual(mockUser);
        });

        it('should throw NotFoundException if user is not found', async () => {
            mockUsersModel.findOne.mockResolvedValue(null);
            await expect(service.findOneByUsername('mockUsername')).rejects.toThrow(NotFoundException);
        });
    });

    describe('getUser', () => {
        it('should return a user if found by UUID', async () => {
            mockUsersModel.findOne.mockResolvedValue(mockUser);
            expect(await service.getUser('mock-uuid')).toEqual(mockUser);
        });

        it('should throw NotFoundException if user is not found by UUID', async () => {
            mockUsersModel.findOne.mockResolvedValue(null);
            await expect(service.getUser('mock-uuid')).rejects.toThrow(NotFoundException);
        });
    });

    describe('updateUser', () => {
        it('should return an updated user', async () => {
            const updateUserDto = new UpdateUserDtoExample();
            mockUsersModel.update.mockResolvedValue([1]);
            mockUsersModel.findOne.mockResolvedValue(mockUser);
            expect(await service.updateUser('mock-uuid', updateUserDto)).toEqual(mockUser);
            expect(mockAuthService.hashPassword).toHaveBeenCalled();
        });

        // Add more scenarios as needed.
    });

    describe('createUser', () => {
        it('should create and return a new user', async () => {
            const createUserDto = new CreateUserDtoExample;
            mockUsersModel.create.mockResolvedValue(mockUser);
            expect(await service.createUser(createUserDto)).toEqual(mockUser);
            expect(mockAuthService.hashPassword).toHaveBeenCalled();
        });

        // Add more scenarios as needed.
    });

    describe('deleteUser', () => {
        it('should delete a user by UUID', async () => {
            mockUsersModel.destroy.mockResolvedValue(1);
            expect(await service.deleteUser('mock-uuid')).toBe(1);
        });

        // Add more scenarios as needed.
    });

    describe('associateUserWithAccount', () => {
        it('should associate a user with accounts and return the user', async () => {
            mockUsersModel.findOne.mockResolvedValue(mockUser);
            mockAccountModel.findAll.mockResolvedValue([]);
            const associatedUser = await service.associateUserWithAccount('mock-uuid', ['account-uuid-1']);
            expect(associatedUser).toEqual(mockUser);
        });

        // Add more scenarios as needed.
    });

    // ... Additional test cases ...
});
