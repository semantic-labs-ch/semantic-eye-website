<div class="single-column-text">

Digital tools are one of the essential buiding blocks of the Semantic Eye Framework.{.subtitle}
</div>


<div class="two-column-text-container top-separator bottom-separator">
    <div class="two-column-text">
    
As mentioned in a number of places on this website and in the related articles, digital transformations are notorious underachievers. Yet organisations still need to do them in order to stay relevant and competitive. The fact that <em>IT-solution providers are usually not in a position to effectively support</em> the organisation at the Organisation Tier, compounds the issue.

<figure class="img-light-background">

![Walking on Water](/assets/tools/playmobil-walking-on-water-1.jpeg){width="400"}
</figure>

<div class="take-away span-columns">

In a metaphorical sense, organisations are trying to <em>safely transport their products and services</em> across the wide and treacherous Digital Transformation River.

_However, this is an act as difficult as walking on water (Jesus to the rescue!)_{.standout}
</div>

On the other hand, IT-solution providers are using <em>very powerful tools to manage the complexity and to assure the quality</em> of their software products&mdash;with great success if one thinks back at how nerve-wreckingly bad e.g. PC software was twenty years ago. 

Today, we all have dozens of apps on our smartphones and they mostly just work. So, that quality problem is sorted. And with those apps, everybody immediately finds their destination; walking, pedalling, driving. Everybody can create a video and upload it to the social platforms of choice within minutes&mdash;<em>activities reserved to skilled professionals merely a decade ago</em>.

<div class="take-away span-columns">

What if organisations had the same <i>kinds</i> of <em> powerful tools to manage the complexity and to assure the quality</em> of their organisational solutions, i.e. their producs and services?
_Tools that seemingly enable practitioners to walk on water?_{.standout}
</div>

This is the critical role that especially digital tools can play: <em>providing stepping stones exactly where the user needs them</em><a href="#footnote1"><sup>1</sup></a>. Just like the diver in the image. This enables users to reach goals that are otherwise out of reach to them.

<div class="footnotes">
<p id="footnote1" class="footnote"><sup>1</sup> This analogy probably goes back to Alan Kay or Steve Wozniak (unable to confirm origin)</p>
</div>

<figure class="img-light-background">

![Walking on Water](/assets/tools/playmobil-walking-on-water-2.jpeg){width="400"}
</figure>
</div>
</div>

<div class="single-column-text">

## The Critical Role of Tools in the Semantic Eye Framework
For a highly complex endeavour like a digital transformation, tools are a critical ingredient, however, very few truly digital tools are available for organisations today. This is why powerful digital tools were made the keystone of the Framework:

They enable organisations to assume a new, leading role in their own transformation.{.take-away} 

<figure class="img-light-background">

![Key framework areas building on each other](/assets/nutshell/framework-components.svg){width="400"}

Figure 3  |  Digital tools (middle) are a central piece of the framework
</figure>

## The Semantic Eye Workbench
Eventually, the Semantic Eye Workbench will feature a dozen integrated components.{.take-away}

### Roadmap

The Workbench is currently under development and no public version has been released yet.

<em>TBD: Release roadmap with planned features and dates.</em>

## Workbench Components are Models with Editors
</div>

<div class="two-column-text-container top-separator bottom-separator">
    <div class="two-column-text">
    
Each component consists of an explicit model with one or more dedicated editors. Each model will be accessible through a dedicated textual grammar with a corresponding editor. Where graphical notations are made available, they will be implemented as dedicated graphical models. However, those models are always stored in textual, human readable form in the grammer that comes with the model.

        <div class="take-away span-columns">
        
Storing models as _human-readable and -editable text_ allows leveraging established, state-of-the-art software-development tools like Git and Github, which allows co-creation between many process modelers and will _lift organisation modelling to the next level_.
        </div>

        <div class="maniculed-hint span-columns">
            <img src="/assets/manicule-for-dark-background.svg" alt="pointing manicule" height="18px">
            <p>Following is an incomplete listing of the planned components, along with their implementation status and a description.</p>
        </div>
    </div>
</div>

<div class="multi-column-text">

### Domain Storytelling (DST){.suppress-top-margin}
Status: 80% Complete.{.take-away}

Following the Semantic Compass, which is an imporant component of the conceptual foundation, one of the main strategies of the Semantic Eye Framework is to make the main deliverables at the organisation tier more formal (see [the Nutshell document]('/pages/nutshell/index.html">Nutshell')).

<figure class="img-light-background">

![Semantic Compass: detail vs. precision](/assets/tools/semantic-compass-with-dst.svg){width="500"}

Figure 4  |  Semantic Compass: detail vs. precision; DST is in the centre
</figure>

However, going full formal directly from stakeholder input is not only difficult, it is not even the goal. The reason is in the degree of precision that formal models and diagrams require. Stakeholders will never and cannot provide fully formal input from the start. An intermediate format is needed.

Domain Storytelling has proven a great approach and notation to query stakeholders about what happens in their area of expertise. _Domain Storytelling diagrams_ are a notation they pick up in a few minutes and that they will give feedback very quickly. They are thus are invaluable tool in capturing and aligning the feedback of mulitple domain experts, future users, partners, etc.{.take-away}

There is the free and effective online domain-story-model editor available to create and maintain DST diagrams in any internet browser ([egon.io/app/](https://egon.io/app/)). However, that editor poses as few limitations for broader-scale use:

- only looks at one diagram at a time;
- only allows using and saving DST models via browser up- and download, respectively;
- requires recurring icons and to be configured again for each diagram (the editor does support _icon sets_ to be saved and reused, however);
- leaves the onus of keeping recurring element names and icons consistent across multiple diagrams on the user;
- saves models in JSON format which does not lend itself to concurrent modelling and merging of versions.

And most importantly: as a half-way house between the informal and the formal description of processes, DST models are the place where new concepts, elements and activities make their first appearance inside the Cosmos. For traceability, it is essential that these models are fully integrated into the Workbench, which is not possible and/or effective if DST models are managed outside the Workbench and the editor was built with different technology.

DST diagrams have thus been chosen as the first tool component. Semantic Eye DST will pilot a few essential features:

- shared icon libraries;
- story books with multiple DST diagrams;
- share of agents (actors) and work objects (name, icon, color) across the diagramms of a book;
- renaming of elements across all stories of a book;
- delegation within a story to a different diagram;
- saving of models in a human-readable programming-language text that enables concurrent modelling and merging e.g. in Git;
- shared modelling sessions across the internet (à la Google Docs or Miro Boards).

### Information Architecture
Status: Planned.{.take-away}

This is about business objects, their attributes, relationships and rules (constraints).

### Object Lifecycle
Status: Planned.{.take-away}

### Component Structure
Status: Planned.{.take-away}

### Process Overviews
Status: Planned.{.take-away}

### Transactions (Processes Component)
Status: Planned.{.take-away}

### Object Snapshots
Status: Planned.{.take-away}
</div>

<div class="single-column-text">

# Technology
The Semantic Eye Workbench is built using the [Eclipse Theia](https://theia-ide.org/) platform and frameworks.

</div>