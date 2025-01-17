// tslint:disable
// graphql typescript definitions

declare namespace GQL {
  interface IGraphQLResponseRoot {
    data?: IQuery | IMutation;
    errors?: Array<IGraphQLResponseError>;
  }

  interface IGraphQLResponseError {
    /** Required for all errors */
    message: string;
    locations?: Array<IGraphQLResponseErrorLocation>;
    /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
    [propName: string]: any;
  }

  interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  interface IError {
    __typename: 'Error';
    path: string;
    message: string;
  }

  interface IUser {
    __typename: 'User';
    id: string;
    email: string;
  }

  interface IMutation {
    __typename: 'Mutation';
    confirmEmail: boolean | null;
    sendForgotPasswordEmail: boolean | null;
    forgotPasswordChange: Array<IError> | null;
    login: ILoginResponse;
    logout: boolean | null;
    register: Array<IError> | null;
  }

  interface IConfirmEmailOnMutationArguments {
    id: string;
  }

  interface ISendForgotPasswordEmailOnMutationArguments {
    email: string;
  }

  interface IForgotPasswordChangeOnMutationArguments {
    newPassword: string;
    key: string;
  }

  interface ILoginOnMutationArguments {
    email: string;
    password: string;
  }

  interface IRegisterOnMutationArguments {
    email: string;
    password: string;
  }

  interface ILoginResponse {
    __typename: 'LoginResponse';
    errors: Array<IError> | null;
    sessionId: string | null;
  }

  interface IQuery {
    __typename: 'Query';
    me: IUser | null;
  }
}

// tslint:enable
