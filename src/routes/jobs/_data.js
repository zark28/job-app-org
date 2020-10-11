import {LoremIpsum} from 'lorem-ipsum'

const lorem = new LoremIpsum();

export let jobs=[
    {id: "1", title: "Mario's plumming assignment", salary: 2000, details: lorem.generateParagraphs(3)},
    {id: "2", title: "Coastal fish", salary: 2500, details: lorem.generateParagraphs(3)},
    {id: "3", title: "Campus shop", salary: 3000, details: lorem.generateParagraphs(3)}
]