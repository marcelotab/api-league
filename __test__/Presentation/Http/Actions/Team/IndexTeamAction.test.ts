/* eslint-disable no-undef */
// import Team from '../../../../../src/Domain/Entities/Team';
import 'reflect-metadata';
import IndexTeamHandler from '../../../../../src/Aplication/Handlers/Team/IndexTeamHandler';
import TeamRepositoryMock from '../../../../Infraestructure/Persistence/Repositories/TeamRepositoryMock';
//import DIcontainer from '../../../../../src/Infraestructure/DI/inversify.config';
//import { Types } from '../../../../../src/Infraestructure/DI/types';
//import { ITeamRepository } from '../../../../../src/Domain/Contracts/Repositories/ITeamRepository';

describe('Aplication - Team Action', () => {
    describe('When call index handler', () => {
        it('should return all teams', async () => {
            //DIcontainer.rebind<ITeamRepository>(Types.ITeamRepository).to(TeamRepositoryMock);
            //const indexTeamHandler = DIcontainer.resolve<IndexTeamHandler>(IndexTeamHandler)

            const repository = new TeamRepositoryMock();
            const indexTeamHandler = new IndexTeamHandler(repository);

            const allTeams = await indexTeamHandler.handle();

            expect(allTeams.length).toEqual(10);
        });

        it('should call the repository index method once', async () => {
            const repository = new TeamRepositoryMock();
            const indexTeamHandler = new IndexTeamHandler(repository);

            await indexTeamHandler.handle();

            repository.assertIndexCalledOnce();
        });
    });
});
