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
    '.cm-scroller::-webkit-scrollbar': {
      width: '10px'
    },
    '.cm-scroller::-webkit-scrollbar-track': {
      backgroundColor: 'transparent !important'
    },
    '.cm-scroller::-webkit-scrollbar-thumb': {
      backgroundColor: '#777 !important',
      borderRadius: '5px'
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
  const { handleChange, initialDoc } = props

  const onUpdate = () => EditorView.updateListener.of(update => {
    if(update.changes){
      handleChange && handleChange(update.state.doc.toString())
    }
  })

  const startState = EditorState.create({
    doc: initialDoc,
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
      onUpdate()
    ]
  })

  useEffect(() => {
    if(!refContainer.current) return
    
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