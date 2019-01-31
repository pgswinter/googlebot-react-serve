function newVoteSubcripbe(parent, args, context, info) {
    return context.prisma.$subscribe.vote({ mutation_in: ['CREATED'] }).node();
}

function newLinkSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.link({ mutation_in: ['CREATED'] }).node()
}

const newVote = {
    subscribe: newVoteSubcripbe,
    resolve: payload => {
        return payload
    },
}

const newLink = {
    subscribe: newLinkSubscribe,
    resolve: payload => {
        return payload
    },
}

module.exports = {
    newLink,
    newVote,
}