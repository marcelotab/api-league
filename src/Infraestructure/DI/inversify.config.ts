import {Container} from "inversify";
import ApiRoutes from "../../Presentation/Http/Routes";
import CreateUserAdapter from "../../Presentation/Http/Adapters/User/CreateUserAdapter";
import Validator from "../../Presentation/Http/Validations/Validator";
import {IUserRepository} from "../../Domain/Contracts/Repositories/IUserRepository";
import UserRepository from "../Persistence/Repositories/UserRepositiry";
import { Types } from './types';
import {IHashService} from "../../Aplication/Services/IHashService";
import HashService from "../../Aplication/Services/HashService";
import CreateUserAction from "../../Presentation/Http/Actions/User/CreateUserAction";
import CreateUserHandler from "../../Aplication/Handlers/User/CreateUserHandler";
import UserRoutes from "../../Presentation/Http/Routes/user";

const DIcontainer = new Container();

//routes
DIcontainer.bind<ApiRoutes>(ApiRoutes).toSelf();
DIcontainer.bind<UserRoutes>(UserRoutes).toSelf();



//repositories
DIcontainer.bind<IUserRepository>(Types.IUserRepository).to(UserRepository);

//adapters
DIcontainer.bind<CreateUserAdapter>(CreateUserAdapter).toSelf();

DIcontainer.bind<Validator>(Validator).toSelf();

//services
DIcontainer.bind<IHashService>(Types.IHashService).to(HashService);

//actions
DIcontainer.bind<CreateUserAction>(CreateUserAction).toSelf();

//handlers
DIcontainer.bind<CreateUserHandler>(CreateUserHandler).toSelf();


export default DIcontainer;