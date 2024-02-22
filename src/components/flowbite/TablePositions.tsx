import React from 'react'
import { Table } from 'flowbite-react';

const tabla =[
    {
      "team_name": "Real Madrid",
      "competition_name": "La Liga 2023",
      "games_played": "1",
      "games_won": "1",
      "games_drawn": "0",
      "games_lost": "0",
      "created_at": "2024-02-16 18:17:01"
    },
    {
      "team_name": "FC Barcelona",
      "competition_name": "La Liga 2023",
      "games_played": "1",
      "games_won": "0",
      "games_drawn": "0",
      "games_lost": "1",
      "created_at": "2024-02-16 18:17:06"
    },
    {
      "team_name": "Atletico Madrid",
      "competition_name": "La Liga 2023",
      "games_played": "1",
      "games_won": "0",
      "games_drawn": "1",
      "games_lost": "0",
      "created_at": "2024-02-16 18:17:12"
    },
    {
      "team_name": "Valencia CF",
      "competition_name": "La Liga 2023",
      "games_played": "1",
      "games_won": "0",
      "games_drawn": "1",
      "games_lost": "0",
      "created_at": "2024-02-16 18:17:13"
    },
    {
      "team_name": "Sevilla FC",
      "competition_name": "La Liga 2023",
      "games_played": "1",
      "games_won": "0",
      "games_drawn": "0",
      "games_lost": "1",
      "created_at": "2024-02-16 18:17:14"
    },
    {
      "team_name": "Real Sociedad",
      "competition_name": "La Liga 2023",
      "games_played": "1",
      "games_won": "1",
      "games_drawn": "0",
      "games_lost": "0",
      "created_at": "2024-02-16 18:17:16"
    },
    {
      "team_name": "Villarreal CF",
      "competition_name": "La Liga 2023",
      "games_played": "1",
      "games_won": "1",
      "games_drawn": "0",
      "games_lost": "0",
      "created_at": "2024-02-16 18:17:17"
    },
    {
      "team_name": "Real Betis",
      "competition_name": "La Liga 2023",
      "games_played": "1",
      "games_won": "0",
      "games_drawn": "0",
      "games_lost": "1",
      "created_at": "2024-02-16 18:17:18"
    }
  
]

const TablePositions: React.FC = () => {
    return (
        <div className='me-3 mt-6'>
            <div className="overflow-x-auto rounded-lg shadow-xl">
                <Table hoverable className='dark text-white '>
                    <Table.Head className=''>
                    <Table.HeadCell className='text-first '>Pos</Table.HeadCell>
                    <Table.HeadCell className='text-first'>Equipo</Table.HeadCell>
                    <Table.HeadCell className='text-first'>PJ</Table.HeadCell>
                    <Table.HeadCell className='text-first'>PG</Table.HeadCell>
                    <Table.HeadCell className='text-first'>PE</Table.HeadCell>
                    <Table.HeadCell className='text-first'>PP</Table.HeadCell>
                    <Table.HeadCell className='text-first'>GF</Table.HeadCell>
                    <Table.HeadCell className='text-first'>GC</Table.HeadCell>
                    <Table.HeadCell className='text-first'>DG</Table.HeadCell>
                    <Table.HeadCell className='text-first'>Pts</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y ">
                    {tabla.map((team, index) => (
                        <Table.Row className='' key={index}>
                        <Table.Cell className=''>{index + 1}</Table.Cell>
                        <Table.Cell className='font-bold'><a href="">{team.team_name}</a></Table.Cell>
                        <Table.Cell className=''>{team.games_played}</Table.Cell>
                        <Table.Cell className=''>{team.games_won}</Table.Cell>
                        <Table.Cell className=''>{team.games_drawn}</Table.Cell>
                        <Table.Cell className=''>{team.games_lost}</Table.Cell>
                        <Table.Cell className=''>0</Table.Cell>
                        <Table.Cell className=''>0</Table.Cell>
                        <Table.Cell className=''>0</Table.Cell>
                        <Table.Cell className=''>3</Table.Cell>
                        </Table.Row>
                    ))}

                    </Table.Body>
                </Table>
            </div>
            
        </div>

            
            
      );
}

export default TablePositions