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
import {ITeamRepository} from "../../Domain/Contracts/Repositories/ITeamRepository";
import TeamRepository from "../Persistence/Repositories/TeamRepository";
import TeamRoutes from "../../Presentation/Http/Routes/team";
import UserRoutes from "../../Presentation/Http/Routes/user";
import CreateTeamAction from "../../Presentation/Http/Actions/Team/CreateTeamAction";
import CreateTeamHandler from "../../Aplication/Handlers/Team/CreateTeamHandler";
import CreateTeamAdapter from "../../Presentation/Http/Adapters/Team/CreateTeamAdapter";

const DIcontainer = new Container();

//routes
DIcontainer.bind<ApiRoutes>(ApiRoutes).toSelf();
DIcontainer.bind<UserRoutes>(UserRoutes).toSelf();
DIcontainer.bind<TeamRoutes>(TeamRoutes).toSelf();

//repositories
DIcontainer.bind<IUserRepository>(Types.IUserRepository).to(UserRepository);
DIcontainer.bind<ITeamRepository>(Types.ITeamRepository).to(TeamRepository);

//adapters
DIcontainer.bind<CreateUserAdapter>(CreateUserAdapter).toSelf();
DIcontainer.bind<CreateTeamAdapter>(CreateTeamAdapter).toSelf();

DIcontainer.bind<Validator>(Validator).toSelf();

//services
DIcontainer.bind<IHashService>(Types.IHashService).to(HashService);

//actions
DIcontainer.bind<CreateUserAction>(CreateUserAction).toSelf();
DIcontainer.bind<CreateTeamAction>(CreateTeamAction).toSelf();

//handlers
DIcontainer.bind<CreateUserHandler>(CreateUserHandler).toSelf();
DIcontainer.bind<CreateTeamHandler>(CreateTeamHandler).toSelf();


export default DIcontainer;