export const gameRef = {
	renderSpaces: [
    {
      position: 'TopLeft',
      type: 'corner',
      connectedTo: ['TopEdge', 'Center', 'LeftEdge'],
      winningConnections: [['Center', 'BottomRight'], ['TopEdge', 'TopRight'], ['LeftEdge', 'BottomLeft']],
      firstSelected: false,
      selected: false,
      playerAtPosition: null,
      currentlyOccupied: false
    },
    {
  		position: 'TopEdge',
  		type:'edge',
  		connectedTo : ['TopLeft', 'TopRight', 'Center'],
  		winningConnections: [['TopLeft', 'TopRight'], ['Center', 'BottomEdge']],
      firstSelected: false,
      selected: false,
      playerAtPosition: null,
      currentlyOccupied: false

    },
    {
      position: 'TopRight',
      type: 'corner',
      connectedTo: ['TopEdge','RightEdge', 'Center'],
      winningConnections: [['TopEdge', 'TopLeft'], ['Center','BottomLeft'], ['RightEdge', 'BottomRight']],
      firstSelected: false,
      selected: false,
      playerAtPosition: null,
      currentlyOccupied: false
    },
    {
      position: 'LeftEdge',
      type: 'edge',
      connectedTo: ['TopLeft', 'BottomLeft', 'Center'],
      winningConnections: [['TopLeft', 'BottomLeft'], ['Center','RightEdge']],
      firstSelected: false,
      selected: false,
      playerAtPosition: null,
      currentlyOccupied: false

    },
    {
      position: 'Center',
      type: 'center',
      connectedTo: ['TopLeft', 'TopEdge', 'TopRight', 'LeftEdge', 'RightEdge', 'BottomLeft', 'BottomEdge', 'BottomRight'],
      winningConnections:[['TopLeft','BottomRight'], ['TopRight','BottomLeft'], ['TopEdge', 'BottomEdge'], ['LeftEdge', 'RightEdge']],
      firstSelected: false,
      selected: false,
      playerAtPosition: null,
      currentlyOccupied: false
    },
		{
			position: 'RightEdge',
      type: 'edge',
      connectedTo: ['TopRight', 'BottomRight', 'Center'],
      winningConnections: [['TopRight', 'BottomRight'], ['Center','LeftEdge']],
      firstSelected: false,
      selected: false,
      playerAtPosition: null,
      currentlyOccupied: false
		},
    {
      position: 'BottomLeft',
      type: 'corner',
      connectedTo: ['LeftEdge', 'BottomEdge', 'Center'],
      winningConnections:[['LeftEdge', 'TopLeft'], ['BottomEdge', 'BottomRight'], ['Center','TopRight']],
      firstSelected: false,
      selected: false,
      playerAtPosition: null,
      currentlyOccupied: false
    },
    {
      position: 'BottomEdge',
      type: 'edge',
      connectedTo: ['BottomLeft', 'Center', 'BottomRight'],
      winningConnections:[['BottomLeft', 'BottomRight'], ['Center', 'TopEdge']],
      firstSelected: false,
      selected: false,
      playerAtPosition: null,
      currentlyOccupied: false
    },
    {
      position: 'BottomRight',
      type: 'corner',
      connectedTo: ['RightEdge', 'BottomEdge', 'Center'],
      winningConnections:[['RightEdge', 'TopRight'], ['BottomEdge', 'BottomLeft'], ['Center','TopLeft']],
      firstSelected: false,
      selected: false,
      playerAtPosition: null,
      currentlyOccupied: false
    }

	]


}//end of gameRef obj


export const pieceCords = [
	[null,null,null],
	[null,null,null],
	[null,null,null]
]
