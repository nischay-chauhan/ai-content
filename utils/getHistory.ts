import { revalidatePath } from "next/cache";
import { db } from "./db";
import { AIOutput } from "./schema";

export const getHistory = async (email: string) => {
    const result = await db.select({
      id: AIOutput.id,
      formData: AIOutput.formData,
      aiResponse: AIOutput.aiResponse,
      templateSlug: AIOutput.templateSlug,
      createdAt: AIOutput.createdAt,
      createdBy: AIOutput.createdBy
    })
      .from(AIOutput)
    const filered = result.filter((item: any) => item.createdBy === email);
    
    console.log(filered);

    return filered;
  };