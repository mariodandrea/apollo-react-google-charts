/* eslint-disable quotes */
const obj = {
  data: {
    posts: [
      {
        title: 'GraphQL 101',
        user: {
          id: '1',
          firstName: 'Jason',
          lastName: 'Heinowitz',
        },
      },
      {
        title: 'GraphQL 205',
        user: {
          id: '2',
          firstName: 'David',
          lastName: 'Zhang',
        },
      },
    ],
  },
  extensions: {
    tracing: {
      version: 1,
      startTime: '2020-04-14T18:27:27.871Z',
      endTime: '2020-04-14T18:27:27.871Z',
      duration: 291258,
      execution: {
        resolvers: [
          {
            path: ['posts'],
            parentType: 'Query',
            fieldName: 'posts',
            returnType: '[Post!]!',
            startOffset: 88144,
            duration: 28870,
          },
          {
            path: ['posts', 0, 'title'],
            parentType: 'Post',
            fieldName: 'title',
            returnType: 'String!',
            startOffset: 139497,
            duration: 14052,
          },
          {
            path: ['posts', 0, 'user'],
            parentType: 'Post',
            fieldName: 'user',
            returnType: 'User!',
            startOffset: 159936,
            duration: 9453,
          },
          {
            path: ['posts', 0, 'user', 'id'],
            parentType: 'User',
            fieldName: 'id',
            returnType: 'ID!',
            startOffset: 177821,
            duration: 8431,
          },
          {
            path: ['posts', 0, 'user', 'firstName'],
            parentType: 'User',
            fieldName: 'firstName',
            returnType: 'String!',
            startOffset: 191617,
            duration: 8176,
          },
          {
            path: ['posts', 0, 'user', 'lastName'],
            parentType: 'User',
            fieldName: 'lastName',
            returnType: 'String!',
            startOffset: 204902,
            duration: 7410,
          },
          {
            path: ['posts', 1, 'title'],
            parentType: 'Post',
            fieldName: 'title',
            returnType: 'String!',
            startOffset: 221509,
            duration: 14052,
          },
          {
            path: ['posts', 1, 'user'],
            parentType: 'Post',
            fieldName: 'user',
            returnType: 'User!',
            startOffset: 239393,
            duration: 8432,
          },
          {
            path: ['posts', 1, 'user', 'id'],
            parentType: 'User',
            fieldName: 'id',
            returnType: 'ID!',
            startOffset: 253701,
            duration: 6642,
          },
          {
            path: ['posts', 1, 'user', 'firstName'],
            parentType: 'User',
            fieldName: 'firstName',
            returnType: 'String!',
            startOffset: 263154,
            duration: 7920,
          },
          {
            path: ['posts', 1, 'user', 'lastName'],
            parentType: 'User',
            fieldName: 'lastName',
            returnType: 'String!',
            startOffset: 275673,
            duration: 5621,
          },
        ],
      },
    },
  },
};

// obj.extensions.tracing.duration => this is the total time
// obj.extensions.tracing.execution.resolvers => array of resolver objs
// console.log(obj.extensions.tracing.execution.resolvers);

const traceToD3 = (data) => {
  const d3Data = [
    [
      { type: 'string', id: 'Resolver/Query' },
      { type: 'date', id: 'Start' },
      { type: 'date', id: 'End' },
    ],
    ['Query', 0, obj.extensions.tracing.duration],
  ];
  let timeElapsed = 0;

  for (let i = 0; i < data.extensions.tracing.execution.resolvers.length; i++) {
    const resolver = data.extensions.tracing.execution.resolvers[i];

    d3Data.push([
      resolver.fieldName,
      timeElapsed,
      resolver.duration + timeElapsed,
    ]);
    timeElapsed += resolver.duration;
  }

  return d3Data;
};

console.log(traceToD3(obj));

/* 


  
  */

/* [
        [
          { type: 'string', label: 'Task ID' },
          { type: 'string', label: 'Task Name' },
          { type: 'string', label: 'Resource' },
          { type: 'date', label: 'Start' },
          { type: 'date', label: 'End' },
          { type: 'number', label: 'Duration' },
          { type: 'number', label: 'Percent Complete' },
          { type: 'string', label: 'Dependencies' },
        ],
        [
          'toTrain',
          'Walk to train stop',
          'walk',
          null,
          null,
          5 * 60 * 1000,
          100,
          null,
        ],
        [
          'music',
          'Listen to music',
          'music',
          null,
          null,
          70 * 60 * 1000,
          100,
          null,
        ],
        [
          'wait',
          'Wait for train',
          'wait',
          null,
          null,
          10 * 60 * 1000,
          100,
          'toTrain',
        ],
        [
          'train',
          'Train ride',
          'train',
          null,
          null,
          45 * 60 * 1000,
          75,
          'wait',
        ],
        [
          'toWork',
          'Walk to work',
          'walk',
          null,
          null,
          10 * 60 * 1000,
          0,
          'train',
        ],
        [
          'work',
          'Sit down at desk',
          null,
          null,
          null,
          2 * 60 * 1000,
          0,
          'toWork',
        ],
      ] */
