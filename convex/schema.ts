import { defineSchema , defineTable} from "convex/server";
import {v} from "convex/values"
export default  defineSchema({
    users:defineTable({
        userId:v.string(),
        email:v.string(),
        name:v.string(),
        isPro:v.boolean(),
        proSince:v.optional(v.number()),
        lemonSqueezyCustomerId:v.optional(v.string()),
        lemonSqueezyOrderId:v.optional(v.string()),

    }).index("by_user_id" , ["userId"]),

   
    codeExecution:defineTable({
       userId:v.string(),
       language:v.string(),
       code:v.string(),
       output:v.optional(v.string()),
       error:v.optional(v.string())
    }).index("by_user_id" , ["userId"]),

    
    snippets:defineTable({
        userId:v.string(),
        title:v.string(),
        code:v.string(),
        createdAt:v.string(),
        userName:v.string() // storing username 
    }).index("by_user_id" , ["userId"]),
    
    snippetComments:defineTable({
        snippetId:v.id("snippets"),
        userId:v.string(),
        content:v.string(),
        userName:v.string() // storing username 
    }).index("by_snippet_id" , ["snippetId"]),

    stars:defineTable({
      userId:v.id("users"),
      snippetId:v.id("snippets"),
    }).index("by_user_id" , ["userId"])
    .index("by_snippet_id" , ["snippetId"])
    .index("by_user_id_and_snippet_id" , ["userId","snippetId"]),
})  