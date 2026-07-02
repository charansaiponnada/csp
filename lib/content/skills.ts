export type Skill = {
  name: string
  category: SkillCategory
  level: 'expert' | 'advanced' | 'intermediate'
  icon?: string
}

export type SkillCategory = {
  name: string
  slug: string
}

export const skillCategories: SkillCategory[] = [
  { name: 'Programming Languages', slug: 'languages' },
  { name: 'ML & Deep Learning', slug: 'ml-dl' },
  { name: 'Computer Vision', slug: 'computer-vision' },
  { name: 'LLMs & NLP', slug: 'llm-nlp' },
  { name: 'Backend & APIs', slug: 'backend' },
  { name: 'Frontend', slug: 'frontend' },
  { name: 'DevOps & Cloud', slug: 'devops' },
  { name: 'Databases', slug: 'databases' },
  { name: 'Tools & Frameworks', slug: 'tools' },
]

export const skills: Skill[] = [
  { name: 'Python', category: { name: 'Programming Languages', slug: 'languages' }, level: 'expert' },
  { name: 'TypeScript', category: { name: 'Programming Languages', slug: 'languages' }, level: 'advanced' },
  { name: 'JavaScript', category: { name: 'Programming Languages', slug: 'languages' }, level: 'advanced' },
  { name: 'C++', category: { name: 'Programming Languages', slug: 'languages' }, level: 'intermediate' },
  { name: 'SQL', category: { name: 'Programming Languages', slug: 'languages' }, level: 'advanced' },

  { name: 'PyTorch', category: { name: 'ML & Deep Learning', slug: 'ml-dl' }, level: 'expert' },
  { name: 'TensorFlow', category: { name: 'ML & Deep Learning', slug: 'ml-dl' }, level: 'advanced' },
  { name: 'scikit-learn', category: { name: 'ML & Deep Learning', slug: 'ml-dl' }, level: 'expert' },
  { name: 'XGBoost', category: { name: 'ML & Deep Learning', slug: 'ml-dl' }, level: 'advanced' },
  { name: 'Hugging Face', category: { name: 'ML & Deep Learning', slug: 'ml-dl' }, level: 'expert' },
  { name: 'Mamba SSM', category: { name: 'ML & Deep Learning', slug: 'ml-dl' }, level: 'advanced' },
  { name: 'Lightning', category: { name: 'ML & Deep Learning', slug: 'ml-dl' }, level: 'advanced' },
  { name: 'Weights & Biases', category: { name: 'ML & Deep Learning', slug: 'ml-dl' }, level: 'advanced' },

  { name: 'OpenCV', category: { name: 'Computer Vision', slug: 'computer-vision' }, level: 'advanced' },
  { name: 'YOLO', category: { name: 'Computer Vision', slug: 'computer-vision' }, level: 'advanced' },
  { name: 'BLIP', category: { name: 'Computer Vision', slug: 'computer-vision' }, level: 'advanced' },
  { name: 'CLIP', category: { name: 'Computer Vision', slug: 'computer-vision' }, level: 'advanced' },
  { name: 'Stable Diffusion', category: { name: 'Computer Vision', slug: 'computer-vision' }, level: 'intermediate' },
  { name: 'SegFormer', category: { name: 'Computer Vision', slug: 'computer-vision' }, level: 'intermediate' },

  { name: 'LangChain', category: { name: 'LLMs & NLP', slug: 'llm-nlp' }, level: 'advanced' },
  { name: 'RAG', category: { name: 'LLMs & NLP', slug: 'llm-nlp' }, level: 'expert' },
  { name: 'OpenAI API', category: { name: 'LLMs & NLP', slug: 'llm-nlp' }, level: 'advanced' },
  { name: 'LlamaIndex', category: { name: 'LLMs & NLP', slug: 'llm-nlp' }, level: 'advanced' },
  { name: 'Transformers', category: { name: 'LLMs & NLP', slug: 'llm-nlp' }, level: 'expert' },
  { name: 'Sentence Transformers', category: { name: 'LLMs & NLP', slug: 'llm-nlp' }, level: 'advanced' },
  { name: 'vLLM', category: { name: 'LLMs & NLP', slug: 'llm-nlp' }, level: 'intermediate' },

  { name: 'FastAPI', category: { name: 'Backend & APIs', slug: 'backend' }, level: 'expert' },
  { name: 'Node.js', category: { name: 'Backend & APIs', slug: 'backend' }, level: 'advanced' },
  { name: 'REST APIs', category: { name: 'Backend & APIs', slug: 'backend' }, level: 'expert' },
  { name: 'WebSockets', category: { name: 'Backend & APIs', slug: 'backend' }, level: 'intermediate' },

  { name: 'React', category: { name: 'Frontend', slug: 'frontend' }, level: 'advanced' },
  { name: 'Next.js', category: { name: 'Frontend', slug: 'frontend' }, level: 'advanced' },
  { name: 'Tailwind CSS', category: { name: 'Frontend', slug: 'frontend' }, level: 'advanced' },
  { name: 'Streamlit', category: { name: 'Frontend', slug: 'frontend' }, level: 'advanced' },

  { name: 'Docker', category: { name: 'DevOps & Cloud', slug: 'devops' }, level: 'advanced' },
  { name: 'AWS', category: { name: 'DevOps & Cloud', slug: 'devops' }, level: 'advanced' },
  { name: 'GitHub Actions', category: { name: 'DevOps & Cloud', slug: 'devops' }, level: 'advanced' },
  { name: 'Linux', category: { name: 'DevOps & Cloud', slug: 'devops' }, level: 'advanced' },
  { name: 'Nginx', category: { name: 'DevOps & Cloud', slug: 'devops' }, level: 'intermediate' },

  { name: 'PostgreSQL', category: { name: 'Databases', slug: 'databases' }, level: 'advanced' },
  { name: 'Redis', category: { name: 'Databases', slug: 'databases' }, level: 'advanced' },
  { name: 'ChromaDB', category: { name: 'Databases', slug: 'databases' }, level: 'advanced' },
  { name: 'MongoDB', category: { name: 'Databases', slug: 'databases' }, level: 'intermediate' },
  { name: 'Pinecone', category: { name: 'Databases', slug: 'databases' }, level: 'intermediate' },

  { name: 'Git', category: { name: 'Tools & Frameworks', slug: 'tools' }, level: 'expert' },
  { name: 'Jupyter', category: { name: 'Tools & Frameworks', slug: 'tools' }, level: 'expert' },
  { name: 'VS Code', category: { name: 'Tools & Frameworks', slug: 'tools' }, level: 'expert' },
  { name: 'Postman', category: { name: 'Tools & Frameworks', slug: 'tools' }, level: 'advanced' },
  { name: 'Figma', category: { name: 'Tools & Frameworks', slug: 'tools' }, level: 'intermediate' },
]

export function getSkillsByCategory(): Record<string, Skill[]> {
  const grouped: Record<string, Skill[]> = {}
  for (const skill of skills) {
    if (!grouped[skill.category.slug]) {
      grouped[skill.category.slug] = []
    }
    grouped[skill.category.slug].push(skill)
  }
  return grouped
}
