/* eslint-disable no-undef */
import Team from '../../../../../src/Domain/Entities/Team';
import faker from 'faker';
import CreateTeamHandler from '../../../../../src/Aplication/Handlers/Team/CreateTeamHandler';
import TeamRepositoryMock from '../../../../Infraestructure/Persistence/Repositories/TeamRepositoryMock';
import CreateTeamAdapter from '../../../../../src/Presentation/Http/Adapters/Team/CreateTeamAdapter';

describe('Aplication - Team Action', () => {
    describe('When new team is created', () => {
        it('should return the newly created team', async () => {
            const teamToCreate = { name: faker.name.findName() };
            const repository = new TeamRepositoryMock();
            const createTeamHandler = new CreateTeamHandler(repository);
            const command = new CreateTeamAdapter().adapt(teamToCreate);

            const lastSavedTeam = await createTeamHandler.handle(command);

            expect(lastSavedTeam).toBeInstanceOf(Team);
            expect(lastSavedTeam.name).toEqual(teamToCreate.name);
        });

        it('should call the repository save method once', async () => {
            const teamToCreate = { name: faker.name.findName() };
            const repository = new TeamRepositoryMock();
            const createTeamHandler = new CreateTeamHandler(repository);
            const command = new CreateTeamAdapter().adapt(teamToCreate);

            await createTeamHandler.handle(command);

            repository.assertSaveCalledOnce();
        });
    });
});
