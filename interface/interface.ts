export interface PromptAreaProps {
    name : string,
    desc : string,
    icon : string,
    category : string,
    slug : string,
    aiPrompt : string,
    form?: FORM[],   
}

export interface FORM {
    label : string,
    field : string,
    name : string,
    required? : boolean
} 