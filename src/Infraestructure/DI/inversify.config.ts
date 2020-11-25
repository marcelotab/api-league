import CreatePlayerHandler from '../../Aplication/Handlers/Player/CreatePlayerHandler';
import { IPlayerRepository } from '../../Domain/Contracts/Repositories/IPlayerRepository';
import { Container } from 'inversify';
import ApiRoutes from '../../Presentation/Http/Routes';
import CreateUserAdapter from '../../Presentation/Http/Adapters/User/CreateUserAdapter';
import { IUserRepository } from '../../Domain/Contracts/Repositories/IUserRepository';
import UserRepository from '../Persistence/Repositories/UserRepositiry';
import { Types } from './types';
import { IHashService } from '../../Aplication/Services/IHashService';
import HashService from '../../Aplication/Services/HashService';
import CreateUserAction from '../../Presentation/Http/Actions/User/CreateUserAction';
import CreateUserHandler from '../../Aplication/Handlers/User/CreateUserHandler';
import { ITeamRepository } from '../../Domain/Contracts/Repositories/ITeamRepository';
import TeamRepository from '../Persistence/Repositories/TeamRepository';
import { IBanRepository } from '../../Domain/Contracts/Repositories/IBanRepository';
import BanRepository from '../Persistence/Repositories/BanRepository';
import TeamRoutes from '../../Presentation/Http/Routes/team';
import UserRoutes from '../../Presentation/Http/Routes/user';
import CreateTeamAction from '../../Presentation/Http/Actions/Team/CreateTeamAction';
import CreateTeamHandler from '../../Aplication/Handlers/Team/CreateTeamHandler';
import CreateTeamAdapter from '../../Presentation/Http/Adapters/Team/CreateTeamAdapter';
import IndexTeamAction from '../../Presentation/Http/Actions/Team/IndexTeamAction';
import IndexTeamHandler from '../../Aplication/Handlers/Team/IndexTeamHandler';
import PlayerRoutes from '../../Presentation/Http/Routes/player';
import PlayerRepository from '../Persistence/Repositories/PlayerRepository';
import CreatePlayerAdapter from '../../Presentation/Http/Adapters/Player/CreatePlayerAdapter';
import CreatePlayerAction from '../../Presentation/Http/Actions/Player/CreatePlayerAction';
import IndexPlayerHandler from '../../Aplication/Handlers/Player/IndexPlayerHandler';
import IndexPlayerAction from '../../Presentation/Http/Actions/Player/IndexPlayerAction';
import CreateBanAdapter from '../../Presentation/Http/Adapters/Ban/CreateBanAdapter';
import DocumentationRoutes from '../../Presentation/Http/Routes/documentation';
import LoginAction from '../../Presentation/Http/Actions/Auth/LoginAction';
import AuthRoutes from '../../Presentation/Http/Routes/auth';
import LoginAdapter from '../../Presentation/Http/Adapters/Auth/LoginAdapter';
import AuthService from '../../Aplication/Services/AuthService';
import TokenService from '../../Aplication/Services/TokenService';
import LoginHandler from '../../Aplication/Handlers/Auth/LoginHandler';
import BanRoutes from '../../Presentation/Http/Routes/ban';
import CreateBanAction from '../../Presentation/Http/Actions/Ban/CreateBanAction';
import CreateBanHandler from '../../Aplication/Handlers/Ban/CreateBanHandler';
import IndexBanAction from '../../Presentation/Http/Actions/Ban/IndexBanAction';
import IndexBanHandler from '../../Aplication/Handlers/Ban/IndexBanHandler';
import DeleteTeamAdapter from '../../Presentation/Http/Adapters/Team/DeleteTeamAdapter';
import UpdateTeamAdapter from '../../Presentation/Http/Adapters/Team/UpdateTeamAdapter';
import UpdateTeamAction from '../../Presentation/Http/Actions/Team/UpdateTeamAction';
import DeleteTeamAction from '../../Presentation/Http/Actions/Team/DeleteTeamAction';
import UpdateTeamHandler from '../../Aplication/Handlers/Team/UpdateTeamHandler';
import DeleteTeamHandler from '../../Aplication/Handlers/Team/DeleteTeamHandler';
import DeletePlayerAdapter from '../../Presentation/Http/Adapters/Player/DeletePlayerAdapter';
import DeletePlayerHandler from '../../Aplication/Handlers/Player/DeletePlayerHandler';
import DeletePlayerAction from '../../Presentation/Http/Actions/Player/DeletePlayerAction';
import UpdatePlayerHandler from '../../Aplication/Handlers/Player/UpdatePlayerHandler';
import UpdatePlayerAction from '../../Presentation/Http/Actions/Player/UpdatePlayerAction';
import UpdatePlayerAdapter from '../../Presentation/Http/Adapters/Player/UpdatePlayerAdapter';
import IndexByIdTeamAdapter from '../../Presentation/Http/Adapters/Team/IndexByIdTeamAdapter';
import IndexByIdTeamAction from '../../Presentation/Http/Actions/Team/IndexByIdTeamAction';
import IndexByIdTeamHandler from '../../Aplication/Handlers/Team/IndexByIdTeamHandler';

/* eslint-disable-next-line @typescript-eslint/naming-convention*/
const DIcontainer = new Container();

//routes
DIcontainer.bind<ApiRoutes>(ApiRoutes).toSelf();
DIcontainer.bind<UserRoutes>(UserRoutes).toSelf();
DIcontainer.bind<TeamRoutes>(TeamRoutes).toSelf();
DIcontainer.bind<PlayerRoutes>(PlayerRoutes).toSelf();
DIcontainer.bind<DocumentationRoutes>(DocumentationRoutes).toSelf();
DIcontainer.bind<AuthRoutes>(AuthRoutes).toSelf();
DIcontainer.bind<BanRoutes>(BanRoutes).toSelf();

//repositories
DIcontainer.bind<IUserRepository>(Types.IUserRepository).to(UserRepository);
DIcontainer.bind<ITeamRepository>(Types.ITeamRepository).to(TeamRepository);
DIcontainer.bind<IPlayerRepository>(Types.IPlayerRepository).to(PlayerRepository);
DIcontainer.bind<IBanRepository>(Types.IBanRepository).to(BanRepository);

//adapters
DIcontainer.bind<CreateUserAdapter>(CreateUserAdapter).toSelf();
DIcontainer.bind<CreateBanAdapter>(CreateBanAdapter).toSelf();
DIcontainer.bind<LoginAdapter>(LoginAdapter).toSelf();

DIcontainer.bind<IndexByIdTeamAdapter>(IndexByIdTeamAdapter).toSelf();
DIcontainer.bind<CreatePlayerAdapter>(CreatePlayerAdapter).toSelf();
DIcontainer.bind<DeletePlayerAdapter>(DeletePlayerAdapter).toSelf();
DIcontainer.bind<UpdatePlayerAdapter>(UpdatePlayerAdapter).toSelf();

DIcontainer.bind<CreateTeamAdapter>(CreateTeamAdapter).toSelf();
DIcontainer.bind<UpdateTeamAdapter>(UpdateTeamAdapter).toSelf();
DIcontainer.bind<DeleteTeamAdapter>(DeleteTeamAdapter).toSelf();

//services
DIcontainer.bind<IHashService>(Types.IHashService).to(HashService);
DIcontainer.bind<AuthService>(AuthService).to(AuthService);
DIcontainer.bind<TokenService>(TokenService).to(TokenService);

//actions
DIcontainer.bind<CreateUserAction>(CreateUserAction).toSelf();

DIcontainer.bind<CreatePlayerAction>(CreatePlayerAction).toSelf();
DIcontainer.bind<IndexPlayerAction>(IndexPlayerAction).toSelf();
DIcontainer.bind<IndexByIdTeamAction>(IndexByIdTeamAction).toSelf();
DIcontainer.bind<DeletePlayerAction>(DeletePlayerAction).toSelf();
DIcontainer.bind<UpdatePlayerAction>(UpdatePlayerAction).toSelf();

DIcontainer.bind<CreateBanAction>(CreateBanAction).toSelf();
DIcontainer.bind<IndexBanAction>(IndexBanAction).toSelf();
DIcontainer.bind<LoginAction>(LoginAction).toSelf();

DIcontainer.bind<CreateTeamAction>(CreateTeamAction).toSelf();
DIcontainer.bind<IndexTeamAction>(IndexTeamAction).toSelf();
DIcontainer.bind<UpdateTeamAction>(UpdateTeamAction).toSelf();
DIcontainer.bind<DeleteTeamAction>(DeleteTeamAction).toSelf();

//handlers
DIcontainer.bind<CreateUserHandler>(CreateUserHandler).toSelf();

DIcontainer.bind<CreatePlayerHandler>(CreatePlayerHandler).toSelf();
DIcontainer.bind<IndexPlayerHandler>(IndexPlayerHandler).toSelf();
DIcontainer.bind<IndexByIdTeamHandler>(IndexByIdTeamHandler).toSelf();
DIcontainer.bind<DeletePlayerHandler>(DeletePlayerHandler).toSelf();
DIcontainer.bind<UpdatePlayerHandler>(UpdatePlayerHandler).toSelf();

DIcontainer.bind<CreateBanHandler>(CreateBanHandler).toSelf();
DIcontainer.bind<IndexBanHandler>(IndexBanHandler).toSelf();
DIcontainer.bind<LoginHandler>(LoginHandler).toSelf();

DIcontainer.bind<CreateTeamHandler>(CreateTeamHandler).toSelf();
DIcontainer.bind<IndexTeamHandler>(IndexTeamHandler).toSelf();
DIcontainer.bind<UpdateTeamHandler>(UpdateTeamHandler).toSelf();
DIcontainer.bind<DeleteTeamHandler>(DeleteTeamHandler).toSelf();

export default DIcontainer;
