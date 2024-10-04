const comments = [
    {
        userName: "samadhan",
        comment: "Hello good morning",
        id: "1",
        replies: [
            {
                userName: "don",
                comment: "Good morning!",
                id: "1.1",
                replies: [],
            }
        ]
    },
    {
        userName: "alice",
        comment: "Hey everyone, how's it going?",
        id: "2",
        replies: [
            {
                userName: "bob",
                comment: "Doing great, how about you?",
                id: "2.1",
                replies: [
                    {
                        userName: "alice",
                        comment: "I'm doing well, thanks for asking!",
                        id: "2.1.1",
                        replies: [],
                    }
                ]
            }
        ]
    },
    {
        userName: "john",
        comment: "Anyone up for a meeting later?",
        id: "3",
        replies: [
            {
                userName: "jane",
                comment: "Sure, what time works for everyone?",
                id: "3.1",
                replies: [
                    {
                        userName: "john",
                        comment: "How about 3 PM?",
                        id: "3.1.1",
                        replies: [],
                    }
                ]
            }
        ]
    }
]

export default  comments
