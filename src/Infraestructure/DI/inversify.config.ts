import {Container} from "inversify";
import ApiRoutes from "../../Presentation/Http/Routes";
import {IBanRepository} from "../../Domain/Contracts/Repositories/IBanRepository";
import BanRepository from "../Persistence/Repositories/BanRepository";

const DIcontainer = new Container();

//routes
DIcontainer.bind<ApiRoutes>(ApiRoutes).toSelf();

//repositories
DIcontainer.bind<IBanRepository>(Types.IBanRepository).to(BanRepository);

export default DIContainer;