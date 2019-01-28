const { GraphQLServer } = require('graphql-yoga')

// 1
// let links = [{
//   id: 'link-0',
//   url: 'www.howtographql.com',
//   description: 'Fullstack tutorial for GraphQL'
// }]
// let idCount = links.length
  
const resolvers = {
    Query: {
      info: () => `This is the API of a Hackernews Clone`,
      feed: (root, args, context, info) => {
        return context.prisma.links()
      },
      // feed: () => links,
    },
    Mutation: {
      // 2
      post: (root, args, context) => {
        return context.prisma.createLink({
          url: args.url,
          description: args.description,
        })
      },
      // post: (parent, args) => {
      //    const link = {
      //     id: `link-${idCount++}`,
      //     description: args.description,
      //     url: args.url,
      //   }
      //   links.push(link)
      //   return link
      // }
    },
    // 3
    Link: {
      id: (parent) => parent.id,
      description: (parent) => parent.description,
      url: (parent) => parent.url,
    }
}
// const typeDefs = `
//   type Query {
//     info: String!
//     feed: [Link!]!
//   }

//   type Mutation {
//     post(url: String!, description: String!): Link!
//   }

//   type Link {
//     id: ID!
//     description: String!
//     url: String!
//   }
// `

// 3
const server = new GraphQLServer({
    typeDefs: 'schema.graphql',
    resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))