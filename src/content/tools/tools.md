<div class="single-column-text">

Digital tools are one of the essential buiding blocks of the Semantic Eye Framework:

<figure class="add-img-background">

![Key framework areas building on each other](/assets/nutshell/framework-components.svg){width="400"}

Figure 1  |  Digital tools (middle) are an key areas of the framework
</figure>
</div>

## The Semantic Eye Workbench
Eventually, the Semantic Eye Workbench will consist of about a dozen integrated components.{.subtitle}

# Components are Models plus Editors
Each component consists of an explicit model with one or more dedicated editors. Each model will be accessible through a dedicated textual grammar with a corresponding editor. Where graphical notations are made available, they will be implemented as dedicated graphical models. However, those models are always stored in textual, human readable form in the grammer that comes with the model. 

Storing models as _human-readable and -editable text_ allows leveraging established, state-of-the-art software-development tools like Git and Github, which allows co-creation between many process modelers and will _lift organisation modelling to the next level_.{.take-away}

<div class="maniculed-hint">
    <img src="/assets/manicule-for-dark-background.svg" alt="pointing manicule" height="18px">
    <p>Following is an incomplete listing of the planned components, along with their implementation status and a description.</p>
</div>

</div>
<div class="multi-column-text">
<div>

## Domain Storytelling
Status: 80% Complete.{.take-away}

Following the Semantic Compass, which is an imporant component of the conceptual foundation, one of the main strategies of the Semantic Eye Framework is to make the main deliverables at the organisation tier more formal (see [the Nutshell document]('/pages/nutshell/index.html">Nutshell')).

However, going full formal directly from stakeholder input is not only difficult, it is not even the goal. The reason is in the degree of precision that formal models and diagrams require. Stakeholders will never and cannot provide fully formal input from the start. An intermediate format is needed.

Domain Storytelling (DST) has proven a great approach and notation to query stakeholders about what happens in their area of expertise. _Domain Storytelling diagrams_ are a notation they pick up in a few minutes and that they will give feedback very quickly. They are thus are invaluable tool in capturing and aligning the feedback of mulitple domain experts, future users, partners, etc.{.take-away}

There is a free and effective online editor available to create and maintain DST diagrams in any internet browser (ADD LINK). However, that editor 

- only looks at one diagram at a time;
- allows using and saving DST models via up- and download, respectively, only;
- requires recurring icons and to be configured again for each diagram (the editor supports _icon sets_ so be saved and reused, however);
- leaves the onus of keeping recurring element names and icons consistent across multiple diagrams on the user;
- saves models in JSON format which does not lend itself to concurrent modelling and merging of versions.

DST diagrams have thus been chosen as the first tool component. They will pilot a few essential features:

- shared icon libraries;
- story books with multiple DST diagrams;
- share of agents (actors) and work objects (name, icon, color) across the diagramms of a book;
- delegation within a story to a different diagram;
- renaming of elements across all stories of a book
- saving of models in a human-readable programming-language text that enables concurrent modelling and merging e.g. in Git;
- shared modelling sessions across the internet (à la Google Docs or Miro Boards).
</div><div>

## Information Architecture
Status: Planned.{.take-away}

This is about business objects, their attributes, relationships and rules (constraints).
</div><div>

## Object Lifecycle
Status: Planned.{.take-away}
</div><div>

## Component Structure
Status: Planned.{.take-away}
</div><div>


## Process Overviews
Status: Planned.{.take-away}
</div><div>

## Transactions (Processes Component)
Status: Planned.{.take-away}
</div><div>

## Object Snapshots
Status: Planned.{.take-away}
</div>
</div>

<div class="single-column-text">

# Technology
The Semantic Eye Workbench is built using the [Eclipse Theia](https://theia-ide.org/) platform and frameworks.

</div>