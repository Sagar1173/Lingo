import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import {neon} from "@neondatabase/serverless";
import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
// @ts-ignore
const db = drizzle(sql,{schema});

const main = async () => {
    try{
        console.log("seeding database");
        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete( schema.challenges);
        await db.delete(schema.challengeOptions );
        await db.delete(schema.challengeProgress );

        await db.insert(schema.courses).values([
            {
                id:1,
                title:"Spanish",
                imageSrc:"/img/spanish.svg",
            },
            {
                id:2,
                title:"English",
                imageSrc : "/img/english.svg",
            },
            {
                id:3,
                title:"German",
                imageSrc:"/img/german.svg",
            },
            {
                id:4,
                title:"Coration",
                imageSrc:"/img/coration.svg",
            },
        ]);

        await db.insert(schema.units).values([
            {
                id:1,
                courseId:1,
                title :"Unit 1",
                description:"Learn the basics of Spanish",
                order:1, 
            },
        ]);

        await db.insert(schema.lessons).values([
            {
                id:1,
                title:"Nouns",
                unitId:1,
                order:1,
                
            },
            {
                id:2,
                title:"Verbs",
                unitId:1,
                order:2,
                
            },
            {
                id:3,
                title:"Phrase",
                unitId:1,
                order:3,
                
            },
            {
                id:4,
                title:"Preposition",
                unitId:1,
                order:4,
                
            }, 
            {
                id:5,
                title:"Pernoun",
                unitId : 1,
                order: 5,
            }
        ]);

        await db.insert(schema.challenges).values([
            {
                id:1,
                lessonId : 1,
                order: 1,
                type :"SELECT",
                question : "Which one of these is the man?",
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                id: 1,
                // title:"el hombre",
                challengeId:1,
                text:"el hombre",
                correct:true,
                audioSrc:"es_man.mp3",
                imageSrc:"/img/man.png"
            },
            {
                id: 2,
                // title:"el hombre",
                challengeId:1,
                text:"la mujer",
                correct:false,
                audioSrc:"es_women.mp3",
                imageSrc:"/img/women.png"
            },
            {
                id: 3,
                // title:"el hombre",
                challengeId:1,
                text:"el robot",
                correct:false,
                audioSrc:"es_robot.mp3",
                imageSrc:"/img/robot.png"
            },
        ])
           

        console.log("Seeding finished");

    }
    catch(error){
        console.error(error);
        throw new Error("Failed to seed the database");
    }
}

main();