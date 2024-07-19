export default [
    {
        name: 'Blog Title Generator',
        desc: 'An AI tool that creates compelling blog titles based on your blog information.',
        category: 'Blog',
        icon: 'edit-3',
        aiPrompt: 'Provide 5 blog topic ideas based on the given niche and outline in bullet points, formatted in a rich text editor.',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Content Generator',
        desc: 'An AI tool that generates engaging blog content based on your provided topic and outline.',
        category: 'Blog',
        icon: 'file-text',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate comprehensive blog content based on the provided topic and outline, formatted in a rich text editor.',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter blog outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that generates creative and trending blog topic ideas based on your niche.',
        category: 'Blog',
        icon: 'bulb',
        slug: 'blog-topic-idea',
        aiPrompt: 'Generate the top 5 blog topic ideas in bullet points based on the provided niche, formatted in a rich text editor.',
        form: [
            {
                label: 'Enter your niche',
                field: 'input',
                name: 'niche',
                required: true
            }
        ]
    },
    {
        name: 'YouTube SEO Title Generator',
        desc: 'An AI tool that creates SEO-optimized and high-ranking YouTube video titles based on your keywords and outline.',
        category: 'YouTube Tools',
        icon: 'youtube',
        slug: 'youtube-seo-title',
        aiPrompt: 'Provide 5 SEO-optimized high-ranking title ideas in bullet points based on the given keywords and outline, formatted in HTML tags.',
        form: [
            {
                label: 'Enter your YouTube video topic keywords',
                field: 'input',
                name: 'keywords',
                required: true
            },
            {
                label: 'Enter YouTube description outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'YouTube Description Generator',
        desc: 'An AI tool that generates engaging YouTube video descriptions with emojis based on your topic and outline.',
        category: 'YouTube Tools',
        icon: 'message-circle',
        slug: 'youtube-description',
        aiPrompt: 'Generate a YouTube description with emojis, under 4-5 lines, based on the provided topic and outline, formatted in a rich text editor.',
        form: [
            {
                label: 'Enter your video topic/title',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter YouTube outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'YouTube Tags Generator',
        desc: 'An AI tool that generates relevant YouTube tags based on your video title and outline.',
        category: 'YouTube Tools',
        icon: 'tag',
        slug: 'youtube-tag',
        aiPrompt: 'Generate 10 relevant YouTube tags in bullet points based on the provided title and outline, formatted in a rich text editor.',
        form: [
            {
                label: 'Enter your YouTube title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter YouTube video outline here (Optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Article Rewriter',
        desc: 'Use this tool to rewrite existing articles or blog posts, making them plagiarism-free and able to bypass AI detectors.',
        category: 'Rewriting Tool',
        icon: 'refresh-cw',
        slug: 'rewrite-article',
        aiPrompt: 'Rewrite the given article without any plagiarism, formatted in a rich text editor.',
        form: [
            {
                label: 'Provide your article/blog post or any other content to rewrite.',
                field: 'textarea',
                name: 'article',
                required: true
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'This tool refines your writing, removing errors and redundancies, offering tone analysis and better word choices.',
        category: 'Writing Assistant',
        icon: 'pen-tool',
        slug: 'text-improver',
        aiPrompt: 'Rewrite the given text without any grammatical mistakes and professionally formatted in a rich text editor.',
        form: [
            {
                label: 'Enter the text you want to rewrite or improve',
                field: 'textarea',
                name: 'textToImprove'
            }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool that adds relevant emojis to your text, making it more engaging.',
        category: 'Blog',
        icon: 'smile',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Add relevant emojis to the given text and rewrite it, formatted in a rich text editor.',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'An AI tool that generates creative and engaging Instagram posts based on your keywords.',
        category: 'Social Media',
        icon: 'instagram',
        slug: 'instagram-post-generator',
        aiPrompt: 'Generate 3 Instagram posts based on the given keywords, formatted in a rich text editor.',
        form: [
            {
                label: 'Enter keywords for your post',
                field: 'input',
                name: 'keywords',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Hashtag Generator',
        desc: 'An AI tool that generates trending Instagram hashtags based on your keywords.',
        category: 'Social Media',
        icon: 'hash',
        slug: 'instagram-hash-tag-generator',
        aiPrompt: 'Generate 15 Instagram hashtags based on the given keywords, formatted in a rich text editor.',
        form: [
            {
                label: 'Enter keywords for your Instagram hashtag',
                field: 'input',
                name: 'keywords',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Post/Reel Idea Generator',
        desc: 'An AI tool that generates new and trending Instagram post or reel ideas based on your niche.',
        category: 'Social Media',
        icon: 'lightbulb',
        slug: 'instagram-post-idea-generator',
        aiPrompt: 'Generate 5-10 Instagram post/reel ideas based on the given niche with the latest trends, formatted in a rich text editor.',
        form: [
            {
                label: 'Enter keywords/niche for your Instagram idea',
                field: 'input',
                name: 'keywords',
                required: true
            }
        ]
    },
    {
        name: 'English Grammar Checker',
        desc: 'An AI tool to correct your English grammar by providing the text.',
        category: 'English',
        icon: 'check-circle',
        slug: 'english-grammar-checker',
        aiPrompt: 'Rewrite the input text by correcting the grammar and formatting it in a rich text editor.',
        form: [
            {
                label: 'Enter text to correct the grammar',
                field: 'textarea',
                name: 'inputText',
                required: true
            }
        ]
    },
    {
        name: 'Code Writer',
        desc: 'An AI tool to generate programming code in any language based on your description.',
        category: 'Coding',
        icon: 'code',
        slug: 'write-code',
        aiPrompt: 'Based on the provided code description, write the code and format it in a rich text editor with code blocks.',
        form: [
            {
                label: 'Enter description of the code you want along with the programming language',
                field: 'textarea',
                name: 'codeDescription',
                required: true
            }
        ]
    },
    {
        name: 'Code Explainer',
        desc: 'An AI tool to explain programming code in any language.',
        category: 'Coding',
        icon: 'help-circle',
        slug: 'explain-code',
        aiPrompt: 'Based on the provided code, explain it line by line and format it in a rich text editor with code blocks.',
        form: [
            {
                label: 'Enter code which you want to understand',
                field: 'textarea',
                name: 'codeDescription',
                required: true
            }
        ]
    },
    {
        name: 'Code Bug Detector',
        desc: 'This tool analyzes your code input to pinpoint and fix bugs, offering detailed solutions and alternatives.',
        category: 'Coding',
        icon: 'alert-circle',
        slug: 'code-bug-detector',
        aiPrompt: 'Based on the provided code input, find and solve bugs, formatted in a rich text editor with code blocks.',
        form: [
            {
                label: 'Enter code which you want to test for bugs',
                field: 'textarea',
                name: 'codeInput',
                required: true
            }
        ]
    },
    {
        name: 'Tagline Generator',
        desc: 'Struggling to find the perfect tagline for your brand? Let our AI tool assist you in creating a tagline that stands out.',
        category: 'Marketing',
        icon: 'type',
        slug: 'tagline-generator',
        aiPrompt: 'Based on the provided product name and outline, generate 5-10 catchy taglines for the business product, formatted in a rich text editor.',
        form: [
            {
                label: 'Product/Brand Name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'What are you selling/marketing?',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    },
    {
        name: 'Product Description Generator',
        desc: 'This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
        category: 'Marketing',
        icon: 'shopping-cart',
        slug: 'product-description',
        aiPrompt: 'Based on the provided product name and description, generate a concise product description for e-commerce, formatted in a rich text editor.',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'Product Details',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    }
];
