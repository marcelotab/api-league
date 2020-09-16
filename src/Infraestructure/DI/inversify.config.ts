import CreatePlayerHandler from '../../Aplication/Handlers/Player/CreatePlayerHandler';
import { IPlayerRepository } from '../../Domain/Contracts/Repositories/IPlayerRepository';
import {Container} from "inversify";
import ApiRoutes from "../../Presentation/Http/Routes";
import CreateUserAdapter from "../../Presentation/Http/Adapters/User/CreateUserAdapter";
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
import IndexTeamAction from "../../Presentation/Http/Actions/Team/IndexTeamAction";
import IndexTeamHandler from "../../Aplication/Handlers/Team/IndexTeamHandler";
import PlayerRoutes from '../../Presentation/Http/Routes/player';
import PlayerRepository from "../Persistence/Repositories/PlayerRepository";
import CreatePlayerAdapter from "../../Presentation/Http/Adapters/Player/CreatePlayerAdapter";
import CreatePlayerAction from '../../Presentation/Http/Actions/Player/CreatePlayerAction';
import IndexPlayerHandler from '../../Aplication/Handlers/Player/IndexPlayerHandler';
import IndexPlayerAction from '../../Presentation/Http/Actions/Player/IndexPlayerAction';
import DocumentationRoutes from '../../Presentation/Http/Routes/documentation'
import LoginAction from "../../Presentation/Http/Actions/Auth/LoginAction";
import AuthRoutes from "../../Presentation/Http/Routes/auth";
import LoginAdapter from "../../Presentation/Http/Adapters/Auth/LoginAdapter";
import AuthService from "../../Aplication/Services/AuthService";
import TokenService from "../../Aplication/Services/TokenService";
import LoginHandler from "../../Aplication/Handlers/Auth/LoginHandler";

const DIcontainer = new Container();

//routes
DIcontainer.bind<ApiRoutes>(ApiRoutes).toSelf();
DIcontainer.bind<UserRoutes>(UserRoutes).toSelf();
DIcontainer.bind<TeamRoutes>(TeamRoutes).toSelf();
DIcontainer.bind<PlayerRoutes>(PlayerRoutes).toSelf();
DIcontainer.bind<DocumentationRoutes>(DocumentationRoutes).toSelf();
DIcontainer.bind<AuthRoutes>(AuthRoutes).toSelf();

//repositories
DIcontainer.bind<IUserRepository>(Types.IUserRepository).to(UserRepository);
DIcontainer.bind<ITeamRepository>(Types.ITeamRepository).to(TeamRepository);
DIcontainer.bind<IPlayerRepository>(Types.IPlayerRepository).to(PlayerRepository);

//adapters
DIcontainer.bind<CreateUserAdapter>(CreateUserAdapter).toSelf();
DIcontainer.bind<CreateTeamAdapter>(CreateTeamAdapter).toSelf();
DIcontainer.bind<CreatePlayerAdapter>(CreatePlayerAdapter).toSelf();
DIcontainer.bind<LoginAdapter>(LoginAdapter).toSelf();

//services
DIcontainer.bind<IHashService>(Types.IHashService).to(HashService);
DIcontainer.bind<AuthService>(AuthService).to(AuthService);
DIcontainer.bind<TokenService>(TokenService).to(TokenService);

//actions
DIcontainer.bind<CreateUserAction>(CreateUserAction).toSelf();
DIcontainer.bind<CreateTeamAction>(CreateTeamAction).toSelf();
DIcontainer.bind<IndexTeamAction>(IndexTeamAction).toSelf();
DIcontainer.bind<CreatePlayerAction>(CreatePlayerAction).toSelf();
DIcontainer.bind<IndexPlayerAction>(IndexPlayerAction).toSelf();
DIcontainer.bind<LoginAction>(LoginAction).toSelf();

//handlers
DIcontainer.bind<CreateUserHandler>(CreateUserHandler).toSelf();
DIcontainer.bind<CreateTeamHandler>(CreateTeamHandler).toSelf();
DIcontainer.bind<IndexTeamHandler>(IndexTeamHandler).toSelf();
DIcontainer.bind<CreatePlayerHandler>(CreatePlayerHandler).toSelf();
DIcontainer.bind<IndexPlayerHandler>(IndexPlayerHandler).toSelf();
DIcontainer.bind<LoginHandler>(LoginHandler).toSelf();


export default DIcontainer;