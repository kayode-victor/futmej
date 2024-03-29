// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Event = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Event'
  /** Event title */
  title: string
  /** Event description */
  excerpt: string
  /** Event-Main-Image */
  image: string
  /** Event date */
  date: IsoDateTimeString
  /** futmej Writing team */
  author: string
  /** Categories of Events */
  categories: Category[]
  /** MDX file body */
  body: MDX
  url: string
}  

/** Nested types */
export type Category = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Category'
  /** Category title */
  title: string

}  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Event
export type DocumentTypeNames = 'Event'

export type NestedTypes = Category
export type NestedTypeNames = 'Category'

export type DataExports = {
  allDocuments: DocumentTypes[]
  allEvents: Event[]
}


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
  dataExports: DataExports
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Event: Event
}

export type NestedTypeMap = {
  Category: Category
}

 