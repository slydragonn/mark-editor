/* eslint-disable react-hooks/exhaustive-deps */
import { defaultKeymap, history, historyKeymap } from "@codemirror/commands"
import { markdown, markdownLanguage } from "@codemirror/lang-markdown"
import { bracketMatching, defaultHighlightStyle, indentOnInput, syntaxHighlighting } from "@codemirror/language"
import { languages } from "@codemirror/language-data"
import { EditorState } from "@codemirror/state"
import { oneDark } from "@codemirror/theme-one-dark"
import { EditorView, highlightActiveLine, keymap, lineNumbers } from "@codemirror/view"
import type React from 'react'
import { useEffect, useRef, useState } from "react"

export const myTheme = EditorView.theme({
  '&': {
    height: '100%',
    outline: 'none !important',
    backgroundColor: 'transparent !important',
    color: '#ffff'
    },
  '.cm-activeLine': {
    backgroundColor: '#383838'  
    },
  '.cm-gutters': {
    backgroundColor: 'transparent',
    color: '#ffffff'
  }
  })

const syntaxStyles = syntaxHighlighting(defaultHighlightStyle, {fallback: true} )

interface Props {
  initialDoc: string,
  handleChange: (state:string) => void
}

const useCodeMirror = <T extends Element>(
  props:Props
): [React.MutableRefObject<T | null>, EditorView?] => {

  const refContainer = useRef<T>(null)
  const [editorView, setEditorView] = useState<EditorView>()
  const { handleChange } = props

  useEffect(() => {
    if(!refContainer.current) return

    const startState = EditorState.create({
      doc: props.initialDoc,
      extensions: [
        keymap.of([...defaultKeymap, ...historyKeymap]),
        history(),
        lineNumbers(),
        markdown({
          base: markdownLanguage,
          codeLanguages: languages,
          addKeymap: true
        }),
        bracketMatching(),
        indentOnInput(),
        highlightActiveLine(),
        myTheme,
        oneDark,
        syntaxStyles,
        EditorView.lineWrapping,
        EditorView.updateListener.of(update => {
          if(update.changes){
            handleChange && handleChange(update.state.doc.toString())
          }
        })
      ]
    })
    
    const view = new EditorView({
      state: startState,
      parent: refContainer.current
    })
    setEditorView(view)
    
    return () => {
      view.destroy()
    }
  }, [refContainer])

  return [refContainer, editorView]
}


export default useCodeMirror