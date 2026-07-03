export type MediumArticle = {
  slug: string
  title: string
  description: string
  date: string
  url: string
  tags: string[]
  image?: string
}

export const mediumArticles: MediumArticle[] = [
  {
    slug: 'loop-engineering',
    title: 'Loop Engineering? Lets Clear the Things With This',
    description:
      'We spend hours prompting AI systems. Prompt. Review. Fix. Prompt again. What if we could automate that iteration itself?',
    date: '2026-06-19',
    url: 'https://medium.com/@charansaiponnada06/loop-engineering-lets-clear-the-things-with-this-d197837c9590',
    tags: ['prompt engineering', 'AI', 'workflow', 'automation'],
    image:
      'https://miro.medium.com/v2/resize:fill:320:214/1*84KVNjJzEZNrcKuVjR6CaA.png',
  },
  {
    slug: 'fine-tuning-vlm-low-compute',
    title: 'My Experience Fine-Tuning a Vision-Language Model on Low Compute',
    description:
      'Fine-tuning a VLM sounds exciting — until you try doing it with limited data and limited compute. Lessons from the trenches.',
    date: '2026-03-03',
    url: 'https://medium.com/@charansaiponnada06/my-experience-fine-tuning-a-vision-language-model-on-low-compute-263c666c3bf9',
    tags: ['fine-tuning', 'VLM', 'LoRA', 'computer vision', 'BLIP'],
    image:
      'https://miro.medium.com/v2/resize:fill:320:214/1*84KVNjJzEZNrcKuVjR6CaA.png',
  },
  {
    slug: 'computer-vision-intro',
    title: 'Unlocking the Future with Computer Vision: What It Is, Why It Is, How to Be?',
    description:
      'Think about an era in which machines not only understand but also interpret what they see. They analyze images and videos just like humans.',
    date: '2024-10-08',
    url: 'https://medium.com/@charansaiponnada06/unlocking-the-future-with-computer-vision-what-it-is-why-it-is-how-to-be-ca111a771725',
    tags: ['computer vision', 'AI', 'introduction'],
    image:
      'https://miro.medium.com/v2/resize:fill:320:214/1*DMkAX5iq29PIydrumM5AUA.png',
  },
  {
    slug: 'ai-data-science-fundamentals',
    title: 'Exploring the Fundamentals and Impact of Artificial Intelligence and Data Science',
    description:
      'Exploring AI and Data Science in a simpler way — breaking down the fundamentals and real-world impact.',
    date: '2024-07-10',
    url: 'https://medium.com/@charansaiponnada06/exploring-the-fundamentals-and-impact-of-artificial-intelligence-and-data-science-fa0fd046617e',
    tags: ['AI', 'data science', 'fundamentals'],
  },
  {
    slug: 'getting-started-data-science',
    title: 'How to Get Started in Data Science?',
    description:
      'Things you need to know to get started in Data Science — a beginner-friendly guide.',
    date: '2024-07-03',
    url: 'https://medium.com/@charansaiponnada06/how-to-get-started-in-data-science-e69c77bd11f4',
    tags: ['data science', 'beginner guide', 'career'],
  },
]
