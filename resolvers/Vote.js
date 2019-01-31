function link(parent, args, context) {
    return context.prisma.link({ id: parent.id }).link()
}

function user(parent, args, context) {
    return context.prisma.link({ id: parent.id }).user()
}

module.exports = {
    link,
    user,
}