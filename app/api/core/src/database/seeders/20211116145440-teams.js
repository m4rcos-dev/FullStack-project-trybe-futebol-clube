module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'teams',
      [
        {
          team_name: 'Avaí/Kindermann',
          shield: 'https://user-images.githubusercontent.com/104791582/225980029-c0eb3887-b842-4799-ae1f-572141b224be.svg',
        },
        {
          team_name: 'Bahia',
          shield: 'https://user-images.githubusercontent.com/104791582/225980026-1d8a17e6-5f16-4889-b00d-ee1d01dbad26.svg',
        },
        {
          team_name: 'Botafogo',
          shield: 'https://user-images.githubusercontent.com/104791582/225980028-cdf8678c-591e-4ee9-91b0-2c13ca4e93c4.svg'
        },
        {
          team_name: 'Corinthians',
          shield: 'https://user-images.githubusercontent.com/104791582/225980051-c649b638-a3b3-48a6-90a1-4af71dc1ef25.svg',
        },
        {
          team_name: 'Cruzeiro',
          shield: 'https://user-images.githubusercontent.com/104791582/225980031-4abe034a-e36a-434c-80e9-bcb252c8bf4f.svg',
        },
        {
          team_name: 'Ferroviária',
          shield: 'https://user-images.githubusercontent.com/104791582/225980035-86f68238-c9a6-489a-81da-6e8aba17ac9c.svg',
        },
        {
          team_name: 'Flamengo',
          shield: 'https://user-images.githubusercontent.com/104791582/225980033-4cb13411-5b1e-4044-9022-495a81533d12.svg',
        },
        {
          team_name: 'Grêmio',
          shield: 'https://user-images.githubusercontent.com/104791582/225980047-1eb05a47-2382-4b7a-bce5-2629396b2ce3.svg',
        },
        {
          team_name: 'Internacional',
          shield: 'https://user-images.githubusercontent.com/104791582/225980045-38dfa51c-ca05-40c3-b2ab-9596bfe3aafb.svg',
        },
        {
          team_name: 'Minas Brasília',
          shield: 'https://user-images.githubusercontent.com/104791582/225980021-ef6e1acd-9595-4d51-abb5-3859616fbca9.png',
        },
        {
          team_name: 'Napoli-SC',
          shield: 'https://user-images.githubusercontent.com/104791582/225979934-7aa3ff7e-0ec8-4e88-b9a4-078b669c2da9.svg',
        },
        {
          team_name: 'Palmeiras',
          shield: 'https://user-images.githubusercontent.com/104791582/225980052-ec83b9c8-4881-46b5-9474-c79549bcb9e1.svg',
        },
        {
          team_name: 'Real Brasília',
          shield: 'https://user-images.githubusercontent.com/104791582/225980044-30b279f4-03fa-4e52-95fd-530ead1e63c1.png',
        },
        {
          team_name: 'Santos',
          shield: 'https://user-images.githubusercontent.com/104791582/225980050-7e96e208-3007-469d-9989-df88ea496c7d.svg',
        },
        {
          team_name: 'São José-SP',
          shield: 'https://user-images.githubusercontent.com/104791582/225980034-c72bf323-081f-4087-aa66-d22c9be325f9.png',
        },
        {
          team_name: 'São Paulo',
          shield: 'https://user-images.githubusercontent.com/104791582/225980040-a1dc0a28-b2d2-437a-92ec-4d53e045cfea.svg',
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('teams', null, {});
  },
};
