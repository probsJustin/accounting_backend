

import { ConstantsService } from '../../util/constants/constants.service';



export class CreateUserDtoExample {

  username = ConstantsService.EXAMPLES.USER_NAME;
  firstname = ConstantsService.EXAMPLES.FIRST_NAME;
  lastname = ConstantsService.EXAMPLES.LAST_NAME;
  email = ConstantsService.EXAMPLES.EMAIL;
  password = ConstantsService.EXAMPLES.PASSWORD;
  description = ConstantsService.EXAMPLES.DESCRIPTION;
  accounts = [ConstantsService.EXAMPLES.UUID];
}

export class UpdateUserDtoExample {
    username = ConstantsService.EXAMPLES.USER_NAME;
    firstname = ConstantsService.EXAMPLES.FIRST_NAME;
    lastname = ConstantsService.EXAMPLES.LAST_NAME;
    email = ConstantsService.EXAMPLES.EMAIL;
    password = ConstantsService.EXAMPLES.PASSWORD;
    description = ConstantsService.EXAMPLES.DESCRIPTION;
    accounts = [ConstantsService.EXAMPLES.UUID];
  }

