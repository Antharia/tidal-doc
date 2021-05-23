module.exports = {
  docs: {
    "Presentation": [
      "TidalCycles",
      "community",
      "showcase",
      {
        "Install Tidal": [
          "getting-started/linux_install",
          "getting-started/macos_install",
          "getting-started/windows_install",
          "getting-started/tidal_start",
        ],
        "Upgrade & Downgrade": [
          "getting-started/upgrading",
          "getting-started/downgrading",
        ],
        "Troubleshoot": [
          "troubleshoot/troubleshoot_linux",
          "troubleshoot/troubleshoot_macos",
          "troubleshoot/troubleshoot_windows",
        ],
        "Get a Text Editor": [
          "getting-started/editor/Atom",
          "getting-started/editor/Vim",
          "getting-started/editor/Emacs",
          "getting-started/editor/VS_Code",
          "getting-started/editor/Sublime_Text",
        ],
      },
    ],
    "Configuration": [
      {
        "Tidal Configuration": [
          "configuration/multiuser-tidal",
          "configuration/boot-tidal",
        ],
        "SuperDirt Configuration": [
          "configuration/adding_effects",
          "configuration/adding_global_effects",
          "configuration/adding_synthesizers",
        ],
        "I/O (MIDI, OSC)": [
          "configuration/MIDIOSC/midi",
          "configuration/MIDIOSC/osc",
          "configuration/MIDIOSC/connecting_to_a_daw",
        ],
        "Audio samples": [
          "configuration/Audio Samples/audiosamples",
          "configuration/Audio Samples/default_library",
          "configuration/Audio Samples/lazy_loading",
        ],
        "Sound and audio": [
          "configuration/AudioConfig/audio_outputs",
        ]
      },
    ],
    "Pattern Library": [
      "patternlib/tutorials/online_course",
      {
        "Basics": [
          "patternlib/tutorials/cycles",
          "patternlib/tutorials/patterns",
          "patternlib/tutorials/pattern_structure",
          "patternlib/tutorials/mini_notation",
          "patternlib/tutorials/oscillators",
          "patternlib/tutorials/synthesizers",
          "patternlib/tutorials/audio_effects",
          "patternlib/tutorials/controls",
          "patternlib/tutorials/tempo",
          "patternlib/tutorials/transitions",
          "patternlib/tutorials/state_values",
        ],
        "How-tos": [
          "patternlib/howtos/buildarpeggios",
          "patternlib/howtos/buildrhythms",
          "patternlib/howtos/startpattern",
        ],
        "Tutorials": [
          "patternlib/tutorials/workshop",
        ],
      },
    ],
    "How does Tidal Work?": [
      {
        "Haskell": [
          "innards/haskell",
          "innards/meaning_of_dollar",
          "innards/type_signatures",
          "innards/contributing_test",
        ],
        "Concept": [
          "innards/what_is_a_pattern",
        ]
      },
    ],
    "Around Tidal": [
      "around_tidal/tidal_history",
      "around_tidal/changelog"
    ],
  },
  advanced: {
    "Understanding innards": [
      "advanced/understanding-innards/What_is_a_pattern",
      "advanced/understanding-innards/Type_signatures",
      "advanced/understanding-innards/Haskell_resources",
    ],
  },
  reference: [
    "reference/Functions",
    "reference/All_the_functions",
    "reference/All_the_controls",
    "reference/All_effects_and_synths",
    {
      Transitions: [
        "reference/transitions/Category_Transitions",
        "reference/transitions/Quick_example_for_transition",
        {
          "List of Transitions": [
            "reference/transitions/List_of_Transitions",
            "reference/transitions/anticipate",
            "reference/transitions/anticipateIn",
            "reference/transitions/clutch",
            "reference/transitions/clutchIn",
            "reference/transitions/histpan",
            "reference/transitions/interpolate",
            "reference/transitions/interpolateIn",
            "reference/transitions/jump",
            "reference/transitions/jumpIn",
            "reference/transitions/jumpIn'",
            "reference/transitions/jumpMod",
            "reference/transitions/histpan",
            "reference/transitions/wait",
            "reference/transitions/waitT",
            "reference/transitions/wash",
            "reference/transitions/washIn",
            "reference/transitions/xfade",
            "reference/transitions/xfadeIn",
          ],
        },
      ],
    },
  ],
  community: [
    "resource/Community",
    "resource/Friends_and_relations",
    "resource/Contributing_tests",
    "resource/Academic_publications",
    "resource/History_of_Tidal",
  ],
};