```mermaid

flowchart TB
  subgraph reason
    Concept1 -->|reason| Concept2
  end
  subgraph question
    Concept --> |condition| Question
  end
  subgraph reduce_processing
  direction LR
  subgraph reducing
    ManyConcepts
  end
  subgraph rememder
    direction TB
    rememder1 --> rememder2
    rememder2 --> rememder3
  end
  end
  reason -->|cannot fresh| reduce_processing 
  question -->|cannot fresh| reduce_processing 
  ManyConcepts -->|reduce| ManyConcepts 
  reducing-->rememder

  ```

Reduce's goal is helping you to learn, so the difference between reduce and other app is reduce `do not store the knowledge itself!`.
So basiclly reduce is a mapping of your mind.When you learn something, your brain is running so fast that you cannot remember all of that,
how to go back to my specical idea? Wow, there is no one software to solve this, then reduce comes.

Reduce gives two divide about your mind,`concept` or `question`.

- `concept`: something you know in your brain,but not `fresh`.

- `question`: perhaps `doubt` is more suitable.`question` is interesting, it let `reduce` so different between other software. It use little psychology knowledge.
If you are science boy or girl,you will ask question about the whole world,you want to know it so want,that you can make a `question`,or you are people who don't trust something so easily, so you will ask if it is wrong?
Don't doubt, just make a `question`.

You constantly `reason` and `question`, you can also `vertical` to a `concept` when you want to know small of the bundle.
So when you do lot's of these stuff, you want to go to another one or you want to know the rest of your concept,you just `reduce`.

I have a small tricy, that helps me know more about the world than the little information I can get.
I would do the above things fast and fast,and do `callback` on it,so I can find something new, in this case,I need to check some books, or search on the internet, or ask other people, just to see the back `concept` or `question`,
then I know more about it. I called this `reduce`.I often do it, but my brain's memory is enough and expensive, so I give you the `rememder`.
`rememder` is `remember things and reminder`.As you can see, it's a wall that has some resources you quickly record, just for go back and check.


