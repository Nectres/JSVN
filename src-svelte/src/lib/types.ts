import type { TagTypes } from "./tagTypes"

type TagName = keyof TagTypes;

interface Tag<Name extends TagName> {
    type: "tag",
    name: Name, 
    inline ?: boolean
    properties: TagTypes[Name], 
    value: string[]
}

interface CharacterSpeech {
    type: "character",
    emotion ?: string, 
    name: string, 
    lines: string[]
}

type SceneProp = Tag<"goto"> | Tag<"scene"> | Tag<"play"> | Tag<"play"> | CharacterSpeech;
type SceneTree = SceneProp[];

export type { SceneProp, SceneTree, TagName, CharacterSpeech, Tag }