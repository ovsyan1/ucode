let superTeam = {
    name: prompt('Write the name of the team'),
    leader: prompt('Write the name of the team\'s leader'),
    members: prompt('Write the names of the members of the team'),
    memberCount: '',
    agenda: prompt('Write the goals and ideas of the team'),
    isEvil: confirm(`Evil or not?
                    'OK - Evil'
                    'Cancel - not'` )
}
alert(`Here's the team:
name -  ${superTeam.name} 
leader -  ${superTeam.leader}
membres - ${superTeam.members}
memberCount - ${superTeam.members.split(',').length + 1}
agenda - ${superTeam.agenda}
isEvil - ${superTeam.isEvil}`)
