const blogs = [
    {
        _id: '5a57ce9edf843c03887311cf',
        title: 'The paternity of an Index',
        author: 'Albert O. Hirschman',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Paternity_of_an_Index.pdf',
        likes: 5,
    },
    {
        _id: '5a57ce9edf843c03887311d0',
        title: 'The Elements Of Style: UNIX As Literature',
        author: 'Thomas Scoville',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Unix_as_Literature',
        likes: 2,
    }
]

const getAll = () => {
    return Promise.resolve(blogs)
}

export default { getAll, blogs }
